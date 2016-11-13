var weather = angular.module('weather', ['ngResource','ngRoute']);

weather.config(function($routeProvider){
        $routeProvider
        .when('/weather',
	        {
	            templateUrl:'weather.html',
	            controller:'weatherCtrl'
	        })
        .when('/registration',
	        {
	            templateUrl:'registration.html',
	            controller:'validationCtrl'
	        })
        .when('/help',
	        {
	            templateUrl:'help.html',
	            controller:'weatherCtrl'
	        })
        .otherwise(
        	{redirectTo: '/'});
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