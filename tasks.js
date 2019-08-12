(function() {
    const COMPLETED_STATUS = 'Completed';
    const INITIAL_STATUS = 'In Progress';
    const DEPENDENTS = {1: [2,3]};


    class TaskEditor {
        constructor(container) {
            this.$el = $(container);
            this.editingTask = null;
            this.$editingPanel = null;

            this.onClickStatus = this.onClickStatus.bind(this);
            this.$panels = this.$el.children('.wspace-task-view');
            this.$panels.filter(':gt(0)').hide().find('.ct-status').on('click', this.onClickStatus);

            this.onChangeStatus = this.onChangeStatus.bind(this);
            this.statusSelector = new StatusSelector($('.status-selector'));
            this.statusSelector.onChange(this.onChangeStatus);

            this.onClickDependencies = this.onClickDependencies.bind(this);
            this.dependencies = new Dependencies($('#dependecies'));
            // only for Technical Requirements
            this.$panels.filter(':eq(1)').find('.has-deps').on('click', this.onClickDependencies);
        }
        edit(task) {
            this.close();

            this.editingTask = task;
            this.editingTask.setActive(true);
            this.$panels.hide();
            this.$editingPanel = this.$panels.filter(':eq(' + task.getID() + ')');
            this.$editingPanel.show();

            this.setName(task.getName());
            this.setStatus(task.getStatus());
        }
        close() {
            if (this.editingTask) {
                this.editingTask.setActive(false);
            }
            this.editingTask = null;
            this.$editingPanel = null;
            this.$panels.hide();
            this.$panels.first().show();
            this.statusSelector.hide();
            this.dependencies.hide();
        }
        setStatus(value) {
            this.$editingPanel.find('.status-picker-status>span:first').html(value);
            if (value === COMPLETED_STATUS) {
                this.$editingPanel.find('.status-picker-button').css({
                    'color': 'rgb(104, 159, 56)',
                    'border-color': 'rgb(227, 235, 217)',
                    'background-color': 'rgb(241, 248, 233)',
                });
                this.$editingPanel.find('.status-picker-complete-toggle')[0].innerHTML = ('<svg wrike-icon-tick="" class="_ngcontent-dat-134" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 7.086L2.086 8.5 6.5 12.914 14.914 4.5 13.5 3.086l-7 7z"></path></svg>');
            } else {
                this.$editingPanel.find('.status-picker-button').css({
                    'color': 'rgb(25, 118, 210)',
                    'border-color': 'rgb(211, 228, 242)',
                    'background-color': 'rgb(227, 242, 253)',
                });
                this.$editingPanel.find('.status-picker-complete-toggle').empty();
            }
        }
        setName(string) {
            this.$editingPanel.find('.title-field:first').val(string);
        }
        onChangeStatus(event) {
            const value = this.statusSelector.getStatus();
            this.setStatus(value);
            this.editingTask.setStatus(value);
        }
        isEditing(task) {
            return task === this.editingTask;
        }
        onClickStatus(event) {
            if (this.statusSelector.isVisible()) {
                this.statusSelector.hide();
                return;
            }
            this.statusSelector.show();
            this.statusSelector.setStatus(this.editingTask.getStatus());
            this.statusSelector.moveAbove(event.currentTarget);
        }
        onClickDependencies(event) {
            event.stopPropagation();
            this.dependencies.show();
            this.dependencies.moveAbove(event.currentTarget);
        }
    }

    class Task {
        constructor(container, params = {}) {
            this.$el = $(container);
            this.id = params.id;
        }
        getID() {
            return this.id;
        }
        getName() {
            return this.$el.find('wrike-task-title').text();
        }
        getStatus() {
            return this.$el.find('.task-status').text();
        }
        setActive(flag) {
            this.$el.toggleClass('active', !!flag);
        }
        setStatus(value) {
            if (this.getStatus() === value) {
                return;
            }
            const $status = this.$el.find('.task-status');
            $status.text(value);
            if (value === COMPLETED_STATUS) {
                $status.css('color', 'rgb(104, 159, 56)');
            }
            this.$el.trigger('change', {status: value});
        }
        onClick(callback) {
            this.$el.on('click', callback);
        }
        onChange(callback) {
            this.$el.on('change', callback);
        }
    }

    class TaskList {
        constructor(container) {
            this.$el = $(container);

            this.onclickTask = this.onclickTask.bind(this);
            this.onchangedTask = this.onchangedTask.bind(this);

            this.initTasks(this.$el.find('.task-block:gt(2)'));
            this.initTasksEditor($('.wspace-mainview-container-right'));
        }
        initTasksEditor($container) {
            this.taskEditor = new TaskEditor($container);
        }
        initTasks($statuses) {
            this.tasks = jQuery.map($statuses, (container, index) => {
                const task = new Task(container, {id: index + 1});
                task.onClick(event => {
                    this.onclickTask(task);
                });
                task.onChange((event, changedFields) => {
                    this.onchangedTask(task, changedFields);
                });
                return task;
            });
        }
        onclickTask(task) {
            if (this.taskEditor.isEditing(task)) {
                this.taskEditor.close();
            } else {
                this.taskEditor.edit(task);
            }
        }
        onchangedTask(task, changedFields) {
            if (changedFields.status === COMPLETED_STATUS) {
                const dependentTasks = this.findDependentTasks(task);
                dependentTasks.forEach(t => t.setStatus(INITIAL_STATUS));

                const $completedGroup = $('*[data-id="Completed"] wrike-task-list-task:first').parent();
                const $task = task.$el.closest('.task-list-preset-compact');
                const $taskGroup = $task.parent();
                $completedGroup.append($task);
                $task.children(':first').addClass('is-last-in-group');
                $task.prev().children(':first').removeClass('is-last-in-group');
                if ($taskGroup.children().length === 0) {
                    $taskGroup.closest('.task-list-preset-compact').hide();
                }
            }
        }
        findDependentTasks(task) {
            const depIDs = DEPENDENTS[task.getID()] || [];
            return this.tasks.filter(t => {
                return depIDs.indexOf(t.getID()) >= 0;
            });
        }
    }

    class StatusSelector {
        constructor(container) {
            this.$el = $(container);

            this.currentStatus = 'New';
            this.onClickOption = this.onClickOption.bind(this);
            this.$options = this.$el.find('.select-list-block');
            this.$options.on('click', this.onClickOption);
        }
        moveAbove(el) {
            const $el = $(el);
            const top = parseInt($el.offset().top + $el.height());
            const left = parseInt($el.offset().left);

            this.$el.find('>.menu-panel').css('transform', 'translate(' + left + 'px, ' + top + 'px)');
        }
        show() {
            this.$el.show();
        }
        hide() {
            this.$el.hide();
        }
        isVisible() {
            return this.$el.is(':visible');
        }
        setStatus(value) {
            this.currentStatus = value;
            this.$options.removeClass('is-selected');
            this.$options.filter(':has(.select-list-item-content:contains("'+value + '"))').addClass('is-selected');
        }
        getStatus() {
            return this.currentStatus;
        }
        onChange(callback) {
            this.$el.on('change', callback);
        }
        onClickOption(event) {
            const $el = $(event.currentTarget);
            const value = $el.find('.select-list-item-content').text();
            if (this.currentStatus === value) {
                return;
            }
            this.setStatus(value);
            this.$el.trigger('change', {status: value});
            this.hide();
        }
    }

    class Dependencies {
        constructor(container) {
            this.$el = $(container);

            // isOuterClick
            $(window).click(event => {
                this.hide();
            });
            this.$el.click(event => {
                event.stopPropagation();
            });
        }
        moveAbove(el) {
            return;
            const $el = $(el);
            const top = parseInt($el.offset().top + $el.height());
            const left = parseInt($el.offset().left);

            this.$el.css({left: left, top: top});
        }
        show() {
            this.$el.show();
        }
        hide() {
            this.$el.hide();
        }
        isVisible() {
            return this.$el.is(':visible');
        }
    }


    $(function () {
        const taskList = new TaskList($('.task-list-listing'));
    });
})();