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

	controller.$inject = ['$log','$state'];

	function controller($log, $state) {

		var vm = this;

		vm.editProduct = editProduct;

		vm.$onChanges = function (changesObj) {
			
			if (changesObj.productObj) {
			
				vm.product = changesObj.productObj.currentValue;
			}
		}

		function editProduct(productCode) {
	
			$state.go('product-edit', { productCode: productCode });
		}
	}
})();