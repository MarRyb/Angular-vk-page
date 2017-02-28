vkApp.service('SessionService', ['$injector', '$q', '$http',
	function($injector, $q, $http) {
		"use strict";
		this.checkAccess = function(event, toState, toParams, fromState, fromParams){
			var $scope = $injector.get('$rootScope');
			var $sessionStorage = $injector.get('$sessionStorage');
				console.log($sessionStorage);
			if (toState.data !== undefined) {
				if (toState.data.noLogin !== undefined && toState.data.noLogin){
					console.log("false");
				}
				else {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: 'http://localhost:3000/api/v1/current_user.json?user_token=' + $sessionStorage.key,
						data: {
							user_token: $sessionStorage.key
						}
					}).then(function(value){
						$scope.user = value;
					}, function(value){
						$scope.user = null;
						$scope.$state.go('home');
					});
				}
			}
		}
	}
]);