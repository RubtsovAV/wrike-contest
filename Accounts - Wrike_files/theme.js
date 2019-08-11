var themeHelper = (function () {
	var globalThemeKey = 'wsUserTheme';

	var themeTypeClsPrefix = 'ws-theme-';
	var d = document;
	var checkThemeCount = 0;
	var startupTheme;
	var currentTheme;

	var clearTheme = function (theme, el, isLocalTheme) {
		if (!isLocalTheme && currentTheme === JSON.stringify(theme)) {
			currentTheme = null;
		}
		el = el || d.documentElement;
		try {
			for (var i in theme.cssVariables) {
				el.style.setProperty(i, 'initial');
			}
		} catch (e) {
		}
		try {
			if (theme.cssClassName) {
				el.classList.remove(theme.cssClassName);
			}
			el.classList.remove(themeTypeClsPrefix + theme.themeType);
		} catch (e) {
		}
	};

	var setupTheme = function (theme, el, isLocalTheme) {
		var themeJson = JSON.stringify(theme);
		if (!isLocalTheme) {
			if (currentTheme) {
				if (currentTheme == themeJson) {
					return;
				}
				clearTheme(JSON.parse(currentTheme), el, isLocalTheme);
			}
			currentTheme = JSON.stringify(theme);
		}
		el = el || d.documentElement;
		try {
			for (var i in theme.cssVariables) {
				el.style.setProperty(i, theme.cssVariables[i]);
			}
		} catch (e) {
		}
		try {
			if (theme.cssClassName) {
				el.classList.add(theme.cssClassName);
			}
			el.classList.add(themeTypeClsPrefix + theme.themeType);
		} catch (e) {
		}
	};

	var readTheme = function () {
		try {
			var latestUserThemeKey = this.userThemeKey;
			var theme = localStorage.getItem(latestUserThemeKey);

			if (!theme && globalThemeKey != latestUserThemeKey) {
				theme = localStorage.getItem(globalThemeKey);
			}

			return JSON.parse(theme);
		} catch (e) {
			console.warn('readTheme', e);
		}
	};

	var writeTheme = function (theme) {
		try {
			var latestUserThemeKey = this.userThemeKey;

			var serializedTheme = JSON.stringify(theme);
			localStorage.setItem(latestUserThemeKey, serializedTheme);

			if (globalThemeKey != latestUserThemeKey) {
				localStorage.setItem(globalThemeKey, serializedTheme);
			}
		} catch (e) {
			console.warn('writeTheme', e);
		}
	};

	var checkThemeChange = function () {
		checkThemeCount++;
		var theme = readTheme();

		if (theme && JSON.stringify(theme) === currentTheme) {
			return;
		}
		if (currentTheme) {
			clearTheme(JSON.parse(currentTheme), d.documentElement);
		}
		if (!theme) {
			return;
		}
		if (checkThemeCount == 1) {
			startupTheme = JSON.stringify(theme);
		}
		setupTheme(theme, d.documentElement);
	};

	var getStartupTheme = function () {
		return startupTheme;
	};

	var getCurrentTheme = function () {
		return currentTheme;
	};

	var defaultLogoUrl = function () {
		var theme = readTheme();

		if (!theme || (theme && theme.themeType == 'Dark')) {
			return null;
		}

		if (theme && theme.defaultLogoUrl) {
			return theme.defaultLogoUrl;
		}

		return null;
	};

	// Very important to keep this listener since dart code is designed to only save
	// received theme to local storage. To prevent double setting and allow switching
	// theme in one tab and immediately seeing the result in the other tab all
	// handling for actual root document styles will be performed in this file.

	window.addEventListener('storage', function (e) {
		if (e.key === this.userThemeKey || e.key === globalThemeKey) {
			checkThemeChange();
		}
	});

	return {
		'readTheme': readTheme,
		'setupTheme': setupTheme,
		'clearTheme': clearTheme,
		'writeTheme': writeTheme,
		'defaultLogoUrl': defaultLogoUrl,
		'getStartupTheme': getStartupTheme,
		'getCurrentTheme': getCurrentTheme,
		'checkThemeChange': checkThemeChange,
		get userThemeKey() {
			var accountFromPath = (window.location.href.match(/#account\/(\d+)/) ||
				window.location.href.match(/#\/view\/(\d+)/) ||
				['']).pop();
			var accountFromCookie = document.cookie.match(/(?:\baccount=(\d+)\b)|$/)[1] || '';

			return globalThemeKey + (accountFromPath || accountFromCookie);
		}
	};
})();

themeHelper.checkThemeChange();
