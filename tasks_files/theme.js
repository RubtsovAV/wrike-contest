var themeHelper = (function () {
	var globalThemeKey = 'wsUserTheme';
	var userThemeKey = createUserThemeKey();

	var themeTypeClsPrefix = 'ws-theme-';
	var docEl = document.documentElement;
	var checkThemeCount = 0;
	var startupTheme;
	var currentTheme;

	function getAccountIdFromPath() {
		return (window.location.search.match(/acc=(\d+)/) //workspace
			|| window.location.href.match(/#account\/(\d+)/) //profile-app
			|| window.location.href.match(/#\/view\/(\d+)/) || ['']).pop(); //profile-app
	}

	function getAccountIdFromCookie() {
		return document.cookie.match(/(?:\baccount=(\d+)\b)|$/)[1] || '';
	}

	function createUserThemeKey() {
		return globalThemeKey + (getAccountIdFromPath() || getAccountIdFromCookie());
	}

	var clearTheme = function (serializedTheme) {
		if (currentTheme === serializedTheme) {
			currentTheme = null;
		}
		var theme = JSON.parse(serializedTheme);
		try {
			for (var i in theme.cssVariables) {
				docEl.style.setProperty(i, 'initial');
			}
		} catch (e) {}
		try {
			if (theme.cssClassName) {
				docEl.classList.remove(theme.cssClassName);
			}
			docEl.classList.remove(themeTypeClsPrefix + theme.themeType);
		} catch (e) {}
	};

	var showTheme = function (serializedTheme) {
		if (currentTheme) {
			if (currentTheme === serializedTheme) {
				return;
			}
			clearTheme(currentTheme);
		}
		currentTheme = serializedTheme;
		var theme = JSON.parse(serializedTheme);
		try {
			for (var i in theme.cssVariables) {
				docEl.style.setProperty(i, theme.cssVariables[i]);
			}
		} catch (e) {}
		try {
			if (theme.cssClassName) {
				docEl.classList.add(theme.cssClassName);
			}
			docEl.classList.add(themeTypeClsPrefix + theme.themeType);
		} catch (e) {}
	};

	var readSerializedTheme = function () {
		var theme = localStorage.getItem(userThemeKey);
		if (!theme && globalThemeKey !== userThemeKey) {
			theme = localStorage.getItem(globalThemeKey);
		}
		return theme;
	};

	var readTheme = function () {
		try {
			var theme = readSerializedTheme();
			return JSON.parse(theme);
		} catch (e) {
			console.warn('readTheme', e);
		}
	};

	var writeTheme = function (serializedTheme) {
		try {
			localStorage.setItem(userThemeKey, serializedTheme);
			if (globalThemeKey !== userThemeKey) {
				localStorage.setItem(globalThemeKey, serializedTheme);
			}
		} catch (e) {
			console.warn('writeTheme', e);
		}
	};

	var checkThemeChange = function () {
		checkThemeCount++;
		var serializedTheme = readSerializedTheme();

		if (serializedTheme === currentTheme) {
			return;
		}
		if (currentTheme) {
			clearTheme(currentTheme);
		}
		if (!serializedTheme) {
			return;
		}
		if (checkThemeCount === 1) {
			startupTheme = serializedTheme;
		}
		showTheme(serializedTheme);
	};

	var setupTheme = function(serializedTheme) {
		if (currentTheme === serializedTheme) {
			clearTheme(serializedTheme);
		}
		showTheme(serializedTheme);
		writeTheme(serializedTheme);
	};

	var getStartupTheme = function () {
		return startupTheme;
	};

	var getCurrentTheme = function () {
		return currentTheme;
	};

	var defaultLogoUrl = function () { //todo remove
		var theme = readTheme();

		if (!theme || (theme && theme.themeType == 'Dark')) {
			return null;
		}

		if (theme && theme.defaultLogoUrl) {
			return theme.defaultLogoUrl;
		}

		return null;
	};

	var getUserThemeKey = function() {
		return userThemeKey;
	};

	// Very important to keep this listener since dart code is designed to only save
	// received theme to local storage. To prevent double setting and allow switching
	// theme in one tab and immediately seeing the result in the other tab all
	// handling for actual root document styles will be performed in this file.

	window.addEventListener('storage', function (e) {
		if (e.key === userThemeKey) { 
			checkThemeChange();
		}
	});

	return {
		'getStartupTheme': getStartupTheme,
		'getCurrentTheme': getCurrentTheme,
		'setupTheme': setupTheme,
		'checkThemeChange': checkThemeChange,
		'defaultLogoUrl': defaultLogoUrl,
		'getUserThemeKey': getUserThemeKey
	};
})();

themeHelper.checkThemeChange();
