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