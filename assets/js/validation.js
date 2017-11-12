var obj = angular.module("validation",["ngSanitize"]);

obj.controller("pageValidation", function($scope)
	{
		$scope.pagetest = function()
		{
			//alert($scope.fname);
			
			if(($scope.fname==undefined) || ($scope.fname=="") )
			{
				$scope.nameerror="Invalid Name ! Please Try Again";
			}else{
				$scope.nameerror="";
			}
			
			//email validation 
			if(($scope.email==undefined) || ($scope.email=="") )
			{
				$scope.emailerror="Invalid e-Mail ! Please Try Again";
			}else{
				$scope.emailerror="";
			}
			
			//password validation 
			if(($scope.pass==undefined) || ($scope.pass=="") )
			{
				$scope.passworderror="Invalid Password ! Please Try Again";
			}else{
				$scope.passworderror="";
			}
			
			//mobile validation 
			if(($scope.mobile==undefined) || ($scope.mobile=="") )
			{
				$scope.mobileerror="Invalid Mobile No ! Please Try Again";
			}else{
				$scope.mobileerror="";
			}
			
			//City validation 
			if(($scope.city==undefined) || ($scope.city=="") )
			{
				$scope.cityerror="Invalid Mobile No ! Please Try Again";
			}else{
				$scope.cityerror="";
			}
			
			//City validation 
			if(($scope.address==undefined) || ($scope.address=="") )
			{
				$scope.addresserror="Incorrect Address ! Please Try Again";
			}else{
				$scope.addresserror="";
			}
			
		}
	});
	
	
	
	
	
	
	
	