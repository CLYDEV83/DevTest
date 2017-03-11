(function () {
    angular
        .module('app')
        .factory('productFactory', productFactory);
    productFactory.$inject = ['$http'];

    function productFactory($http) {
        var service = {
        	getData: getData,
        	getProduct: getProduct,
        	updateProduct: updateProduct,
        	createProduct: createProduct
        };

        return service;

        function getData(searchModel) {
			
        	return $http.post('/api/product/get/all', searchModel);
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