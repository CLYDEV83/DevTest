(function () {
	angular
        .module('app')
        .component('categoryEdit', {
        	restrict: 'E',
        	bindings: {
        		categoryName: '@'
        	},
        	templateUrl: '/modules/category/js/components/category-edit.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', 'categoryFactory', '$state'];

	function controller($log, categoryFactory, $state) {

		var vm = this;

		vm.update = update;

		vm.$onChanges = function (changesObj) {

			if (changesObj.categoryName && changesObj.categoryName.currentValue) {

				vm.categoryName = changesObj.categoryName.currentValue;

				getCategory(vm.categoryName)
					.then(function (result) {
						
						vm.category = result.data;
				});
			}
		}

		function getCategory(categoryName)
		{
			return categoryFactory.getCategory(categoryName)
				.then(function (result) {
					
					return result;
				});
		}

		function update() {

			categoryFactory.updateCategory(vm.categoryName, vm.category)
				.then(function (result) {

					$state.go('category-list');			
				});
		}
	}
})();