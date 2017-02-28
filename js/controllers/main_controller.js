vkApp.controller('mainController', ['$scope', '$http', '$sessionStorage', '$state', 
	function($scope, $http, $sessionStorage, $state) {
		$scope.exit = function(){
			$http({
				method: 'POST',
				url: 'http://localhost:3000/api/v1/logout.json'
			}).then(function(value){
				console.log(value);
				$sessionStorage.key = null;
				$state.go('home');
				$scope.user = null;
			})

		}
}]);