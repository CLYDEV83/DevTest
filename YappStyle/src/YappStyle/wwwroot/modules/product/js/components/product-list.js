(function () {
	angular
        .module('app')
        .component('productList', {
        	restrict: 'E',
        	bindings: {

        	},
        	templateUrl: '/modules/product/js/components/product-list.html',
        	controller: controller,
        	controllerAs: 'vm'
        });

	controller.$inject = ['$log', 'productFactory', 'categoryFactory', '$state'];

	function controller($log, productFactory, categoryFactory, $state) {

		var vm = this;

		vm.getData = getData;
		vm.getProductsWithSearch = getProductsWithSearch;
		vm.filterByCategory = filterByCategory;
		vm.addProduct = addProduct;
		vm.isFiltered = false;
		vm.getAllProducts = getAllProducts;

		vm.$onInit = function () {
		
			getCategoryList();
			getAllProducts();			
		}

		function getData() {

			return productFactory.getData()
					.then(function (result) {

						return result;
					});
		}

		function getAllProducts() {

			vm.categoryName = null;

			getData().then(function (result) {
				
				vm.products = result.data;

			});
		}

		function getProductsWithSearch(searchModels) {

			vm.isFiltered = false;

			vm.categoryName = null;
			
				getDataWithQuery(searchModels)
					.then(function (result) {

						vm.products = result.data;
				});
		}

		function getDataWithQuery(searchModels) {

			return productFactory.getDataWithSearch(searchModels)
				.then(function (result) {

					return result;
				});
		}

		function filterByCategory(categoryName) {
			
			vm.searchModels = [];

			vm.categoryName = categoryName;

			vm.searchText = {
				fieldName: 'Category',
				searchValue: vm.categoryName
			}
			
			vm.searchModels.push(vm.searchText)

			getDataWithQuery(vm.searchModels)
				.then(function (result) {

					vm.isFiltered = true;

					vm.products = result.data;
			});
		}

		function getCategoryList(categorySearch)
		{
			vm.categorySearch = categorySearch || [];

			return categoryFactory.getData(vm.categorySearch)
				.then(function (result) {

					vm.categories = result.data;

					return result;
				});
		}

		function editProduct(productCode) {

			$state.go('product-edit', { productCode: productCode });
		}

		function addProduct(categoryName) {

			$state.go('product-create', { categoryName: categoryName });
		}
	}
})();