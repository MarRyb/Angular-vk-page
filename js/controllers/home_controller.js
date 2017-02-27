vkApp.controller('HomeController', ['$scope', '$http', '$sessionStorage', '$state', 
	function($scope, $http, $sessionStorage, $state) {
	$scope.registrationUser = {};
	$scope.signUp  = function(){
		console.log($scope.registrationUser);
		$http({
			method: 'POST',
			url: 'http://localhost:3000/api/v1/signup.json',
			data: {
				user: $scope.registrationUser
			}
		}).then(function(response){
			$sessionStorage.key = response.data.user.authentication_token;
			$state.go('profile');
			$scope.user = response.data.user;
		}, function(response) {
			$scope.errors = response.data.errors;
			$scope.user = null;
		});
	};

$scope.loginUser = {};
	$scope.signIn  = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:3000/api/v1/login.json',
			data: {
				user: $scope.loginUser
			}
		}).then(function(response){
			$sessionStorage.key = response.data.user.authentication_token;
			$state.go('profile');
			$scope.user = response.data.user;
		}, function(response){
			$scope.error = response.data.error;
			$scope.user = null;
		});
	};
}]);