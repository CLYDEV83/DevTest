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

	controller.$inject = ['$log', '$stateParams', '$state'];

	function controller($log, $stateParams, $state) {
		var vm = this;
		vm.editCategory = editCategory;

		vm.$onChanges = function (changesObj) {
			
			if (changesObj.categoryObj) {
				
				vm.category = changesObj.categoryObj.currentValue;
			}




		}


		function editCategory(categoryName) {
			$log.debug('edit clicked', categoryName);
			$state.go('category-edit', { categoryName: categoryName });
		}
	}
})();