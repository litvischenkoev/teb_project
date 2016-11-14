// var registration = angular.module('registration', ['ngResource','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

weather.controller('validationCtrl', function validationCtrl($scope) {
	console.log('validationCtrl');
	$scope.data = {};
	// $scope.data.sex = 1;
	$scope.reset = function(){
		$scope.username = '';
		$scope.email = '';
   }   
   
   $scope.checkData = function() {
		data.username = $scope.username;
		data.usersurname = $scope.usersurname;
		data.email = $scope.email;
		data.sex = $scope.sex;
		data.address = $scope.address;
		data.weight = $scope.weight;
		data.occupation = $scope.occupation;
		console.log(data);
	}
	
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
	   		ctrl.$parsers.push=function (value) {
	   			if(value) {
	    			return value.toLowercase();
	    		}
	   }
	  }
	 }
});

weather.controller('DatepickerPopupDemoCtrl', function DatepickerPopupDemoCtrl($scope) {
  console.log('DatepickerPopupDemoCtrl');
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
