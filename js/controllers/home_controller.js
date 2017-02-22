vkApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
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
			alert("Done!");
			$scope.registrationUser = {};
		}, function(response) {
			$scope.errors = response.data.errors;
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
			alert("УРА, ТЫ ЗАЛОГИНИЛСЯ - скоро будет твоя страница :)");
		}, function(response){
			$scope.error = response.data.error;
		});
	};
}]);