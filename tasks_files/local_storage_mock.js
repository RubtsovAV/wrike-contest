(function () {
	/*
	 Safari Private mode: it just throws when you write something to Storage, and it disallows to mock gloabal localStorage instance
	 */
	if (typeof localStorage === 'object') {

		var key = 'checkPrivateModeStorage';
		try {
			localStorage.setItem(key, 1);
			localStorage.removeItem(key);
			localStorage[key] = true;
			delete localStorage[key];

		} catch (e) {

			var data = {};
			Storage.prototype.setItem = function (key, value) {
				if (defined(key)) {
					data[key] = value;
				}
			};
			Storage.prototype.getItem = function (key) {
				return (defined(key) && defined(data[key])) ? data[key] : null;
			};
			Storage.prototype.removeItem = function (key) {
				delete data[key];
			};
		}
	}

})();
