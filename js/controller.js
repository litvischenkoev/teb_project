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

