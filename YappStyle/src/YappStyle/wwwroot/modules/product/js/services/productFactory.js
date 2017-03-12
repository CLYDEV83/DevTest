(function () {
    angular
        .module('app')
        .factory('productFactory', productFactory);
    productFactory.$inject = ['$http'];

    function productFactory($http) {
        var service = {
        	getDataWithSearch: getDataWithSearch,
        	getData: getData,
        	getProduct: getProduct,
        	updateProduct: updateProduct,
        	createProduct: createProduct
        };

        return service;

        function getDataWithSearch(searchModel) {
			
        	return $http.post('/api/product/get/all', searchModel);
        }

        function getData() {

        	return $http.post('/api/product/get');
        }

        function getProduct(productCode) {

        	return $http.get('/api/product/get/' + productCode);
        }

        function updateProduct(productCode, product) {

        	return $http.post('/api/product/update/' + productCode, product);
        }

        function createProduct(product) {

        	return $http.post('/api/product/add', product);
        }
    }
})();