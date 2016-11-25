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