(function () {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);
RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){
		
$urlRouterProvider.otherwise('/');

	$stateProvider.state('categories', {
		url:'/categories',
		templateUrl:'src/categories.template.html',
		controller: 'CategoryController as cC',
		resolve:{
			itemsCategory:['MenuDataService', function(MenuDataService){
			return MenuDataService.getAllCategories();
				
			}]
		}
	})
	.state('home',{
		url:'/',
		templateUrl:'src/home.template.html'
	})
	.state('categories.items',{
		templateUrl:'src/items.template.html',
		controller: 'itemsController as itemsC',
		params:{
			itemShortName:null},
		resolve:{
			itemsList:['$stateParams','MenuDataService', function($stateParams,MenuDataService){
			return MenuDataService.getItemsForCategory($stateParams.itemShortName);
			}]}
	});
}

})();