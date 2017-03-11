(function () {
	angular
        .module('app')
        .component('searchBox', {
        	restrict: 'E',
        	bindings: {
        		getData: '&'
        	},
        	templateUrl: '/modules/product/js/components/search/search-box.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', '$stateParams'];

	function controller($log, $stateParams) {
		var vm = this;

		vm.searchModels = [];

		vm.searchText = {
			fieldName: 'SearchText',
			searchValue: ''
		}

		vm.searchModels.push(vm.searchText);

		vm.getAllWithSearch = function () {
			$log.debug('search function models', vm.searchModels);
			vm.getData({searchModels: vm.searchModels });
		}
		
	}
})();