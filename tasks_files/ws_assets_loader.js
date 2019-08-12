window.envConfig = {};
window.timeLog = {'buildVersion': 2026726};

/************ Logging Service ************/
(function () {
	'use strict';
	/**
	 * @type {boolean}
	 */
	window.loggingServiceIsJsPreStartErrorSavingEnabled = true;
	/**
	 * @type {Array<ErrorEvent>}
	 */
	window.loggingServiceJsPreStartErrorsList = [];

	window.addEventListener('error',
		/**
		 * @param e {ErrorEvent}
		 */
		function (e) {
			if (loggingServiceIsJsPreStartErrorSavingEnabled) {
				loggingServiceJsPreStartErrorsList.push(e);
			}
		}
	);
})();
/*****************************************/

window.WsLoadHelper = window.WsLoadHelper || {};

window.WsLoadHelper.__wsLoadTimeLog = window.timeLog;
window.WsLoadHelper.__wsLoadTimeLog['start'] = window.performance.timing ?
	new Date(window.performance.timing.navigationStart) :
	new Date();

WsLoadHelper.isDeveloperBuild = false;
WsLoadHelper.jsInitialized = false;

WsLoadHelper.setLoadTimeMark = function (name) {
	this.__wsLoadTimeLog[name] = new Date();
};

WsLoadHelper.loadSvgSprite = function () {
	//global function, delcared in generated svg-sprite
	loadSvgSpriteToDom('svg-sprite');
};

(function (scope) {
	var WsAssetsLoader = function (assetsBaseUrl, globalAssetsBaseUrl, workspaceLocaleUrl, extJsLocaleUrl) {
		this._assetsBaseUrl = this._rtrim(assetsBaseUrl, this._pathSeparator);
		this._globalAssetsBaseUrl = this._rtrim(globalAssetsBaseUrl, this._pathSeparator);
		this._workspaceLocaleUrl = workspaceLocaleUrl;
		this._extJsLocaleUrl = extJsLocaleUrl;
		this._scriptQueue = [];
	};

	WsAssetsLoader.prototype = {
		_pathSeparator: '/',

		exportEnvConfig: function () {
			scope.envConfig = {
				assetsPrefix: this._assetsBaseUrl,
				cdnStaticPrefix: this._globalAssetsBaseUrl,
			};
		},

		loadAssets: function () {
			this._createApplicationRoot('app');

			        this._loadAssetCss('index.env=web.locale=.stage=release.sprited.css');
    
        this._loadAssetCss('wrike_ws.css');
      

			        this._loadCdnStaticCss('emoji/png/twemoji48.css');
    

			        this._loadSvgSprite('symbol/svg/sprite.symbol.js');
    

			      this._loadWorkspaceLocale();
      this._addScriptToQueue('wspace/local_storage_mock.js');
      this._addScriptToQueue('index.env=web.locale=.stage=release.js', 'js_scriptParsed', true);
      this._loadExtJsLocale();
    
        this._addScriptToQueue('external_resources/4.16.1_le_jquery_entrypoint.js', null);
      
        this._addScriptToQueue('external_resources/1.3.8_le_ace_bundle_js.js', null);
      
        this._addScriptToQueue('external_resources/4.16.1_le2_bundle.js', "le_scriptParsed");
      

			      this._registerEtherpadFiles({"le_styles":"external_resources/1.3.8_le_styles.css","le_styles_mobile":"external_resources/1.3.8_le_styles_mobile.css","le_jquery_entrypoint":"external_resources/4.16.1_le_jquery_entrypoint.js","le_ace_bundle_js":"external_resources/1.3.8_le_ace_bundle_js.js","le2_bundle":"external_resources/4.16.1_le2_bundle.js","jquery_handsontable_styles":"external_resources/1.3.8_jquery_handsontable_styles.css","jquery_handsontable_code":"external_resources/1.3.8_jquery_handsontable_code.js"});
    

			this._processScriptQueue(function () {
				dart.bootstrapApplication();
			});
		},

		_loadWorkspaceLocale: function () {
			this._addScriptToQueue(this._workspaceLocaleUrl, 'locale_scriptsParsed');
		},

		_loadExtJsLocale: function () {
			this._addScriptToQueue(this._extJsLocaleUrl, 'extjsLocale_scriptParsed');
		},

		_addScriptToQueue: function (path, loadTimeMark, addCrossorigin) {
			this._scriptQueue.push({
				'path': this._generateAssetUrl(path),
				'loadTimeMark': loadTimeMark,
				'addCrossorigin': addCrossorigin
			});
		},

		_createApplicationRoot: function (tagName) {
			var body = document.getElementsByTagName('body').item(0);
			var appRoot = document.createElement(tagName);

			body.appendChild(appRoot);
		},

		_loadAssetCss: function (path) {
			this._loadCss(this._generateAssetUrl(path));
		},

		_loadCdnStaticCss: function (path) {
			this._loadCss(this._generateGlobalAssetUrl(path));
		},

		_loadScriptImmediately: function (path, loadTimeMark, addCrossorigin) {
			if (!loadTimeMark) {
				this._loadScript(this._generateAssetUrl(path), null, addCrossorigin);
			} else {
				this._loadScript(this._generateAssetUrl(path), function () {
					WsLoadHelper.setLoadTimeMark(loadTimeMark);
				}, addCrossorigin);
			}
		},

		_loadSvgSprite: function (path) {
			this._loadScript(this._generateAssetUrl(path), function () {
				WsLoadHelper.loadSvgSprite();
			});
		},

		_registerEtherpadFiles: function (filesConfig) {
			var config = {};

			for (var key in filesConfig) {
				config[key] = this._generateAssetUrl(filesConfig[key]);
			}

			scope.LE_ETHERPAD_FILES = config;
		},

		_processScriptQueue: function (callback) {
			var script = this._scriptQueue.shift();

			if (!script) {
				if (callback) {
					callback();
				}

				return;
			}

			this._loadScript(script.path, function () {
				if (script.loadTimeMark) {
					WsLoadHelper.setLoadTimeMark(script.loadTimeMark);
				}

				if (script.onLoadHandler) {
					script.onLoadHandler();
				}

				this._processScriptQueue(callback);

			}.bind(this), script.addCrossorigin);
		},

		_loadCss: function (path) {
			var head = document.getElementsByTagName('head').item(0);
			var css = document.createElement('link');

			css.setAttribute('type', 'text/css');
			css.setAttribute('rel', 'stylesheet');
			css.setAttribute('href', path);

			head.appendChild(css);
		},

		_loadScript: function (path, loadHandler, addCrossorigin) {
			var head = document.getElementsByTagName('head').item(0);
			var script = document.createElement('script');

			script.setAttribute('type', 'text/javascript');
			script.setAttribute('src', path);

			if (loadHandler) {
				script.onload = loadHandler;
			}

			if (addCrossorigin) {
				script.setAttribute('crossorigin', 'anonymous');
			}

			head.appendChild(script);
		},

		_generateAssetUrl: function (path) {
			return this._assetsBaseUrl + this._pathSeparator + this._ltrim(path, this._pathSeparator);
		},

		_generateGlobalAssetUrl: function (path) {
			return this._globalAssetsBaseUrl + this._pathSeparator + this._ltrim(path, this._pathSeparator);
		},

		_rtrim: function (string, char) {
			for (var i = string.length - 1; i >= 0; i -= 1) {
				if (char !== string[i]) {
					string = string.substring(0, i + 1);
					break;
				}
			}

			return string;
		},

		_ltrim: function (string, char) {
			for (var i = 0; i > string.length - 1; i += 1) {
				if (char !== string[i]) {
					string = string.substring(i);
					break;
				}
			}

			return string;
		}
	};

	scope.WsAssetsLoader = WsAssetsLoader;

}(window));
