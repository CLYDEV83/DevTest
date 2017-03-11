(function () {
	angular
        .module('app')
        .component('product', {
        	restrict: 'E',
        	bindings: {        	
        		productObj: '<'
        	},
        	templateUrl: '/modules/product/js/components/product.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', '$stateParams', '$state'];

	function controller($log, $stateParams, $state) {
		var vm = this;

		vm.editProduct = editProduct;

		vm.$onChanges = function (changesObj) {
			
			if (changesObj.productObj) {
			
				vm.product = changesObj.productObj.currentValue;
			}

		}

		function editProduct(productCode) {
			$log.debug('edit clicked', productCode);
			$state.go('product-edit', { productCode: productCode });
		}
	}
})();