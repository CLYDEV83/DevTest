(function () {
	angular
        .module('app')
        .component('productEdit', {
        	restrict: 'E',
        	bindings: {
        		productCode: '<'
        	},
        	templateUrl: '/modules/product/js/components/product-edit.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', '$stateParams', 'productFactory', '$state'];

	function controller($log, $stateParams, productFactory, $state) {
		var vm = this;

		vm.update = update;

		vm.$onChanges = function (changesObj) {

			if (changesObj.productCode && changesObj.productCode.currentValue) {
	
				vm.productCode = changesObj.productCode.currentValue;

				getproduct(vm.productCode)
					.then(function (result) {
						$log.debug('got the product', result);
						vm.product = result.data;
				});
			}
		}

		function getproduct(productCode)
		{
			return productFactory.getProduct(productCode)
				.then(function (result) {			
					return result;
				});
		}

		function update() {
			productFactory.updateProduct(vm.productCode, vm.product)
				.then(function (result) {
					$state.go('product-list');			
				});
		}
	}
})();