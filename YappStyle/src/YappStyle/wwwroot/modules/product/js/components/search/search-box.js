(function () {
	angular
        .module('app')
        .component('searchBox', {
        	restrict: 'E',
        	bindings: {
        		getDataWithSearch: '&'
        	},
        	templateUrl: '/modules/product/js/components/search/search-box.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log'];

	function controller($log) {
		var vm = this;

		vm.searchModels = [];

		vm.searchText = {
			fieldName: 'SearchText',
			searchValue: ''
		}

		vm.searchModels.push(vm.searchText);

		vm.getAllWithSearch = function () {

			vm.getDataWithSearch({ searchModels: vm.searchModels });
		}

	}
})();