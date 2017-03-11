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

	controller.$inject = ['$log', '$stateParams', 'categoryFactory', '$state'];

	function controller($log, $stateParams, categoryFactory, $state) {
		var vm = this;

		vm.update = update;

		vm.$onChanges = function (changesObj) {

			$log.debug('in edit', vm.categoryName);

			if (changesObj.categoryName && changesObj.categoryName.currentValue) {

			
				vm.categoryName = changesObj.categoryName.currentValue;

				$log.debug('categoryName', changesObj);

				getCategory(vm.categoryName)
					.then(function (result) {
						$log.debug('got the category', result);
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