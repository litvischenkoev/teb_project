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