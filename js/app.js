var vkApp = angular.module('vkApp', ["ui.router", "ui.bootstrap", "ngResource", "ngStorage"]);
vkApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home_page')
	$stateProvider.state('home',{
		url: '/home_page',
		templateUrl: 'template/home_page.html',
		controller: 'HomeController',
		data: {
			noLogin: true
		}
	});
	$stateProvider.state('profile',{
		url: '/profile_page',
		templateUrl: 'template/profile_page.html',
		data: {
			noLogin: false
		}
	});
});

vkApp.run(['$rootScope', '$state', '$stateParams', 'SessionService', 
	function($rootScope, $state, $stateParams, SessionService){
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		$rootScope.user = null;

		$rootScope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams){

				SessionService.checkAccess(event, toState, toParams, fromState, fromParams);
			}
		)
	}]);