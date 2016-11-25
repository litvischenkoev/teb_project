// var registration = angular.module('registration', ['ngResource','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

weather.controller('validationCtrl', function validationCtrl($scope) {
   	
    $scope.user = { 
 		username:'', 
 		usersurname:'', 
		email:'', 
		sex:'male', 
		dt:'', 
		address:'', 
		weight:'', 
		occupation:'',
		hobs: [],
		comment:'', 
	}; 
console.log($scope.user);
   	$scope.max = Object.keys($scope.user).length;
   	console.log(Object.keys($scope.user).length);
	$scope.dynamic = 1;
    
    $scope.hobbies = {
    	Reading: false,
    	Jumping: false,
    	Swimming: false,
    	Cycling: false
  	};

	$scope.reset = function(){
		$scope.user = { 
 		username:'', 
 		usersurname:'', 
		email:'', 
		sex:'male', 
		dt:'', 
		address:'', 
		weight:'', 
		occupation:'',
		hobs: [],
		comment:'', 
		}; 
    }

  	$scope.$watchCollection('hobbies', function () {
    	$scope.user.hobs = [];
    	angular.forEach($scope.hobbies, function (value, key) {
      		if (value) {
        		$scope.user.hobs.push(key);
      		}
    	});
  	});

	
//fo calendar
	
  	$scope.clear = function() {
    	$scope.user.dt = null;
  	};

  	$scope.open1 = function() {
    	$scope.popup1.opened = true;
  	};

  	$scope.popup1 = {
    	opened: false
  	};

//fo progressbar 	
	

	for (prop in $scope.user) {
		$scope.$watch("user."+ prop, function (n,o) {
			if(n && !o) $scope.dynamic++;
		 		else if (!n && o) $scope.dynamic--;

		});
	}
	$scope.$watch("user.hobs", function (n,o) {
		if ((n.length > o.length ) && (o.length==0)) {$scope.dynamic++;}
		if ((n.length < o.length ) && (o.length==1)) {$scope.dynamic--;}
	});



});





