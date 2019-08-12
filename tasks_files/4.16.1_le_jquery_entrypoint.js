var __originalDefine;
if (typeof define==="function" && define.amd) {
  __originalDefine = define;
  define = undefined; 
}
var __originalRequireJs;
if (typeof requirejs==="function" && requirejs.load) {
  __originalRequireJs = requirejs;
  requirejs = undefined; 
}

/**
 * This is helper to properly inject jquery into all ace frames.
 * Helper is already injected to jquery-bundle.js, so in this case you won't need to include this file.
 * If external jQuery is used, use this file, but check all prerequisites.
 * 
 * Requirements:
 * - Global scope should contain `window` variable (referring to same scope)
 * - Global scope should contain `__extendWindow` function (it's usually shipped with jQuery itself).
 * - Global scope should contain `jQueryMigrateFactory` function (it's usually shipped with jQueryMigrate).
 */

__extendJQueryMigrate = function ( thatWindow ) {
	thatWindow.__extendJQueryMigrate = __extendJQueryMigrate;
	__configureJQueryMigrate(thatWindow);

	// we need that only for browser context, so can call jQueryMigrateFactory directly
	jQueryMigrateFactory.call(thatWindow, thatWindow.jQuery, thatWindow);
}

__configureJQueryMigrate = function(wnd) {
	if (wnd.jQuery) {
		wnd.jQuery.migrateTrace = false;
		wnd.jQuery.migrateMute = true;
		wnd.console && wnd.console.log('LE JQMigrate mute on:', wnd.jQuery.migrateTrace, wnd.jQuery.migrateMute);
	}
}

__configureJQueryMigrate(window);
jQueryMigrate(jQueryMigrateFactory);

window.__injectJQuery = function(wnd) {
	__extendWindow(wnd, __jqueryFactory );
	__extendJQueryMigrate(wnd);
	wnd.__injectJQuery = __injectJQuery;
}

if (!!__originalDefine) {
  define = __originalDefine;
  __originalDefine = undefined; 
}
if (!!__originalRequireJs) {
  requirejs = __originalRequireJs;
  __originalRequireJs = undefined; 
}