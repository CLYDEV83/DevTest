(function () {
	angular
        .module('app')
        .component('categoryList', {
        	restrict: 'E',
        	bindings: {

        	},
        	templateUrl: '/modules/category/js/components/category-list.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log','categoryFactory', '$state'];

	function controller($log, categoryFactory, $state) {

		var vm = this;

		vm.addCategory = addCategory;

		vm.$onInit = function () {

			getCategoryList();
		

		}

		function getCategoryList() {

			return categoryFactory.getData(vm.categorySearch)
				.then(function (result) {

					vm.categories = result.data;

					return result;
				});
		}

		function addCategory() {
			$state.go('category-create');
		}
	
	}
})();