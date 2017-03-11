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

	controller.$inject = ['$log', 'categoryFactory', '$state'];

	function controller($log, categoryFactory, $state) {

		var vm = this;

		vm.addCategory = addCategory;

		vm.category = {
			products: []
		};


		function addCategory() {
			categoryFactory.createCategory(vm.category)
				.then(function (result) {

					$state.go('category-list');
				});
		}
	}
})();