	
	obj.controller("dataControl", function($scope,$http)
	{
	    $scope.getuser = function()
		{
			$http.get("user.json").then(function(response){
				$scope.user = response.data;
			});	
		}
		
		$scope.aboutus = function()
		{
			$scope.msg = "<h1>Hello About Us</h1>";
		}
		
		
		$scope.contact = function()
		{
			$scope.msg = "<h1>Hello Contact Us</h1>";
		}
	});
	
	
	
	
	