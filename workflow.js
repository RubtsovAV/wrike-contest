(function() {
    const CONFIRM_CHANGE_INITIAL_STATUS_TEXT = 'You already have an inital status. Do you wanna change it?'

    class StatusEditor {
        constructor(container) {
            this.$el = $(container);
            this.editingStatus = null;

            this.$name = this.$el.find('.base-text-field:first');
            this.$isInitial = this.$el.find('.switcher-input:first');

            this.onChangeIsInitial = this.onChangeIsInitial.bind(this);
            this.onClose = this.onClose.bind(this);

            this.$isInitial.on('change', this.onChangeIsInitial);
            this.$el.find('.tooltip-close-button').on('click', this.onClose);

            this.initIsInitialTooltip($('.initial-status-tooltip:first'));
        }
        initIsInitialTooltip(container) {
            this.isInitialTooltip = new InitialStatusTooltip(container);
            this.$el.find('.wf-designer-lock-transitions-switcher__hint-target').click(event => {
                event.preventDefault();
                event.stopPropagation();
                this.isInitialTooltip.show();
                this.isInitialTooltip.moveAbove(event.currentTarget);
            });
        }
        edit(status) {
            this.editingStatus = status;
            this.setName(status.getName());
            this.setIsInitial(status.getIsInitial());
            this.$el.show();
        }
        close() {
            this.editingStatus = null;
            this.$el.hide();
        }
        isEditing(status) {
            return this.editingStatus === status;
        }
        setName(name) {
            this.$name.val(name);
        }
        setIsInitial(isInitial) {
            this.$isInitial.prop('checked', isInitial);
        }
        onChangeIsInitial(event) {
            const value = event.currentTarget.checked;
            this.editingStatus.setIsInitial(value);
        }
        onClose(event) {
            this.close();
        }
    }

    class Status {
        constructor(container) {
            this.$el = $(container);
            this.isInitial = false;
        }
        getName() {
            return this.$el.find('.wf-designer-scheme-status-card__title-text').text();
        }
        getIsInitial() {
            return this.isInitial;
        }
        setIsInitial(value) {
            this.isInitial = value;
            if (value) {
                this.$el.find('.wf-designer-scheme-status-card__title').append('<i class="far fa-arrow-alt-circle-right"></i>');
            } else {
                this.$el.find('.wf-designer-scheme-status-card__title > i').remove();
            }
            this.$el.trigger('change', {isInitial: value});
        }
        onClick(callback) {
            this.$el.on('click', callback);
        }
        onChange(callback) {
            this.$el.on('change', callback);
        }
    }

    class Workflow {
        constructor(container) {
            this.$el = $(container);

            this.onclickStatus = this.onclickStatus.bind(this);
            this.onchangedStatus = this.onchangedStatus.bind(this);

            this.initStatuses($('.wf-designer-scheme-status-group-list__group:first .wf-designer-scheme-status-card'));
            this.initStatusEditor($('.wf-designer-scheme-status-editor__tooltip'));
        }
        initStatusEditor($container) {
            this.statusEditor = new StatusEditor($container);
        }
        initStatuses($statuses) {
            this.statuses = jQuery.map($statuses, container => {
                const status = new Status(container);
                status.onClick(event => {
                    this.onclickStatus(status);
                });
                status.onChange((event, changedFields) => {
                    this.onchangedStatus(status, changedFields);
                });
                return status;
            });
        }
        onclickStatus(status) {
            if (this.statusEditor.isEditing(status)) {
                this.statusEditor.close();
            } else {
                this.statusEditor.edit(status);
            }
        }
        onchangedStatus(status, changedFields) {
            if (changedFields.isInitial) {
                const currentInitial = this.statuses.find(s => status !== s && s.getIsInitial());
                if (currentInitial && !confirm(CONFIRM_CHANGE_INITIAL_STATUS_TEXT)) {
                    status.setIsInitial(false);
                    return;
                }
                currentInitial.setIsInitial(false);
            }
        }
    }

    class InitialStatusTooltip {
        constructor(container) {
            this.$el = $(container);
            this.$el.hide();

            // isOuterClick
            $(window).click(event => {
                this.hide();
            });
            this.$el.click(event => {
                event.stopPropagation();
            });
        }
        moveAbove(el) {
            const $el = $(el);
            const top = parseInt($el.offset().top + $el.height() + 10);
            const left = parseInt($el.offset().left - 100);

            this.$el.find('>.tooltip-container').css('transform', 'translate(' + left + 'px, ' + top + 'px)');
            this.$el.find('>.tooltip-tail').css('transform', 'translate(' + (left + 105) + 'px, ' + (top - 8) + 'px) rotate(180deg)');
        }
        show() {
            this.$el.show();
        }
        hide() {
            this.$el.hide();
        }
    }


    $(function () {
        const workflow = new Workflow($('.wf-designer-content'));
    });
})();