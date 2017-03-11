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

	controller.$inject = ['$log', '$stateParams', 'productFactory', 'categoryFactory', '$state'];

	function controller($log, $stateParams, productFactory, categoryFactory, $state) {
		var vm = this;

		vm.getData = getData;
		vm.filterByCategory = filterByCategory;
		vm.addProduct = addProduct;
		vm.isFiltered = false;

		vm.$onInit = function () {
		
			getCategoryList();
			getData();

		}

		function refresh(searchModels) {

			vm.searchModels = searchModels || [];

			if (vm.searchModels.length > 0 && vm.searchModels[0].fieldName !== 'SearchText') {

				vm.isFiltered = true;		
			}
			else {

				vm.isFiltered = false;
			}

			return productFactory.getData(vm.searchModels)
				.then(function (result) {

					return result;
				});
		}

		function getData(searchModels) {
			refresh(searchModels)
				.then(function (result) {

				vm.products = result.data;		
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

			vm.getData(vm.searchModels);

			
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