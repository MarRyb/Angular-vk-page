vkApp.controller('ProfileController', ['$scope', '$http', '$sessionStorage',
	function($scope, $http, $sessionStorage) {
		 	
	 	$scope.status = '';  
		$http({
			method: 'GET',
			url: 'http://localhost:3000/api/v1/users/friends'
		}).then(function(value){
			$scope.friends = value.data;
		})
		$scope.wallPosts = [];

		$scope.addPost = function(){
			$http({
				method: 'POST',
				url: 'http://localhost:3000/api/v1/wall_posts.json',
				data: {
					wall_post: {
						text: $scope.postMessage
					},
					user_token: $sessionStorage.key
				}
			}).then(function(value){
				$scope.wallPosts.unshift(value.data);
			}, function(){
				alert("error, blin!");
			})
		}

		$http({
			method: 'GET',
			url: "http://localhost:3000/api/v1/wall_posts.json",
			params: {
				user_token: $sessionStorage.key
			}
		}).then(function(value){
			$scope.wallPosts = value.data.items;
			$scope.lastPost = value.data.last_id;
		})

		$scope.morePosts = function(){
			$http({
				method: 'GET',
				url: 'http://localhost:3000/api/v1/wall_posts.json',
				params: {
					user_token: $sessionStorage.key, 
					last_id: $scope.lastPost
				}
			}).then(function(value){
				$scope.lastPost = value.data.last_id;
				$scope.wallPosts = $scope.wallPosts.concat(value.data.items);
			})
		}
	}
]);