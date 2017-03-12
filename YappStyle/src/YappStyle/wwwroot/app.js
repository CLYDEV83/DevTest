angular.module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');
    	$stateProvider
		.state('product-list',{
			url: '/',
			template: '<product-list></product-list>',
		})

    	.state('product-edit',{
    		url: '/product/edit/:productCode',
    		template: '<product-edit product-code="ctrl.productCode"></product-edit>',
    		controller: ['$stateParams', '$log', function ($stateParams, $log) {
    			var ctrl = this;
    			ctrl.productCode = $stateParams.productCode;
    		}],
    		controllerAs: 'ctrl'

    	})

    	.state('product-create',{
    		url: '/product/create/:categoryName',
    		template: '<product-create category-name="{{ctrl.categoryName}}"></product-edit>',
    		controller: ['$stateParams', '$log', function ($stateParams, $log) {
    			var ctrl = this;
    			ctrl.categoryName = $stateParams.categoryName;
    		}],
    		controllerAs: 'ctrl'

    	})

		.state('category-list',{
			url: '/categories',
			template: '<category-list></category-list>',
		})

    	.state('category-edit',{
    		url: '/categories/edit/:categoryName',
    		template: '<category-edit category-name="{{ctrl.categoryName}}"></category-list>',
    		controller: ['$stateParams', '$log', function ($stateParams, $log) {
    			var ctrl = this;
    			ctrl.categoryName = $stateParams.categoryName;
    		}],
    		controllerAs: 'ctrl'
    	})

    	.state('category-create',{
    		url: '/category/create',
    		template: '<category-create></category-create>',
    	});

    }
  ]);