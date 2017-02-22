var vkApp = angular.module('vkApp', ["ui.router", "ui.bootstrap", "ngResource"]);
vkApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home_page')
	$stateProvider.state('home',{
		url: '/home_page',
		templateUrl: 'template/home_page.html',
		controller: 'HomeController'
	});
});