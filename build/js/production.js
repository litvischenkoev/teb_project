var weather = angular.module('weather', ['ngResource','ngRoute','ui.bootstrap']);

weather.config(function($routeProvider){
        $routeProvider
        .when('/weather',
	        {
	            templateUrl:'template/weather.html',
	            controller:'weatherCtrl'
	        })
        .when('/registration',
	        {
	            templateUrl:'template/registration.html',
	            controller:'validationCtrl'
	        })
        .when('/team',
	        {
	            templateUrl:'template/team.html',
	            controller:'teamCtrl'
	        })
        .otherwise(
        	{redirectTo: '/'});

});


weather.controller('teamCtrl', function teamCtrl($scope) {

});
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






weather.directive('validateMinWords', function () {
	 return {
		  restrict: 'A',
		  require: 'ngModel',
		  scope: {
		   validateMinWords: '='
		  },
	  	link: function (scope, element, attrs, ctrl) {
	   		ctrl.$validators.minwords=function (modelValue) {
	    	return ctrl.$isEmpty(modelValue)|| modelValue.split(' ').length >= scope.validateMinWords;
	   }
	  }
	 }
});

weather.directive('lowerCase', function () {
	 return {
		  restrict: 'A',
		  require: 'ngModel',
		  scope: {
		  },
	  	link: function (scope, element, attrs, ctrl) {
	   		ctrl.$parsers.push(function (value) {
	   			if(value) {
	    			return value.toLowerCase();
	    		}
	   })
	  }
	 }
});
weather.controller('weatherCtrl', function weatherCtrl($scope) {
	$scope.search = function ($event) {
		$event.preventDefault();
		console.log($scope.city);
		// if ($event.keyCode===13){
			$scope.input = $scope.city;
		// }
	}
	$scope.weekday = function(day){
		var arr = ["Sundey", "Mondey", "Tuesday", "Wednesday", "Thursday", "Fridey", "Saturday"]; 
		// console.log(day);
		return (arr[(new Date(day)).getDay()]);
	}
	$scope.weatherIcons = {
		"Rain" : "images/icons/icon-9.svg",
		"Clouds" : "images/icons/icon-3.svg",
		"Atmosphere" : "images/icons/icon-7.svg",
		"Thunderstorm" : "images/icons/icon-12.svg",
		"Drizzle" : "images/icons/icon-5.svg",
		"Snow" : "images/icons/icon-14.svg",
		"Clear" : "images/icons/icon-2.svg",
		"Extreme" : "images/icons/icon-8.svg",
		"Additional" : "images/icons/icon-3.svg"
		};
	
});
weather.directive('widget', function (weatherResource, weatherWeekResource) {
	return {
		restrict: 'E',
		link: function (scope, element) {
			scope.$watch('input', function (n) {
				if (n) {
					weatherResource.get({city: n}, function (response) {
						// console.log('response', response);
						scope.data = response;
					})
					weatherWeekResource.get({city: n}, function (response) {
						// console.log('response', response);
						scope.dataforecast = response.list;
					})
				}
			})
		}
	}
});

weather.factory('weatherResource', function ($resource) {
	var api_key = '6e3fcb812a6ea26bfbb60bacee7afa6f',
		path = 'http://api.openweathermap.org/data/2.5/weather?q=:city&units=metric&appid=' + api_key;
	return $resource(path);
})


 weather.factory('weatherWeekResource', function ($resource) {
	var api_key = '6e3fcb812a6ea26bfbb60bacee7afa6f',
		path = 'http://api.openweathermap.org/data/2.5/forecast?q=:city&units=metric&appid=' + api_key;
	return $resource(path);
})