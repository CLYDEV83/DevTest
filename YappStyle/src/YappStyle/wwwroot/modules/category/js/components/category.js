(function () {
	angular
        .module('app')
        .component('category', {
        	restrict: 'E',
        	bindings: {
        		categoryObj: '<'
        	},
        	templateUrl: '/modules/category/js/components/category.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', '$state'];

	function controller($log, $state) {

		var vm = this;

		vm.editCategory = editCategory;

		vm.$onChanges = function (changesObj) {
			
			if (changesObj.categoryObj) {
				
				vm.category = changesObj.categoryObj.currentValue;
			}
		}

		function editCategory(categoryName) {

			$state.go('category-edit', { categoryName: categoryName });
		}
	}
})();