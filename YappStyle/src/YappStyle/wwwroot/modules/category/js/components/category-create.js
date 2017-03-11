(function () {
	angular
        .module('app')
        .component('categoryCreate', {
        	restrict: 'E',
        	bindings: {
        		categoryName: '@'
        	},
        	templateUrl: '/modules/category/js/components/category-create.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', '$stateParams', 'categoryFactory', '$state'];

	function controller($log, $stateParams, categoryFactory, $state) {
		var vm = this;

		vm.addCategory = addCategory;
		//vm.categoryName = categoryName;

		vm.category = {
			products: []
		};


		function addCategory() {
			categoryFactory.createCategory(vm.category)
				.then(function (result) {

					$log.debug('Created!', result);
					$state.go('category-list');
				});
		}
	}
})();