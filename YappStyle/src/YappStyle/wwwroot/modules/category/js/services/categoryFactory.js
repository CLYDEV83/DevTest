(function () {
	angular
        .module('app')
        .factory('categoryFactory', categoryFactory);
	categoryFactory.$inject = ['$http'];

	function categoryFactory($http) {
		var service = {
			getData: getData,
			getCategory: getCategory,
			updateCategory: updateCategory,
			createCategory: createCategory,
		};

		return service;

		function getData() {

			return $http.post('/api/category/get');

		}

		function getCategory(categoryName) {

			return $http.get('/api/category/get/' + categoryName);

		}

		function updateCategory(categoryName, category) {

			return $http.post('/api/category/update/' + categoryName, category);
		}

		function createCategory(category) {

			return $http.post('/api/category/add', category);
		}
	}
})();