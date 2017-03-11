(function () {
	angular
        .module('app')
        .component('productCreate', {
        	restrict: 'E',
        	bindings: {
        		categoryName: '@'
        	},
        	templateUrl: '/modules/product/js/components/product-create.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', 'productFactory', '$state'];

	function controller($log, productFactory, $state) {

		var vm = this;

		vm.addProduct = addProduct;

		vm.product = {
			categoryName: vm.categoryName
		};


		function addProduct() {
			productFactory.createProduct(vm.product)
				.then(function (result) {

					$state.go('product-list');

				});
		}
	}
})();