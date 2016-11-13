// var registration = angular.module('registration', ['ngResource','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

weather.controller('validationCtrl', function validationCtrl($scope) {
	console.log('validationCtrl');
	var data = {};
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

// weather.controller('DatepickerPopupDemoCtrl', function DatepickerPopupDemoCtrl($scope) {
//   console.log('DatepickerPopupDemoCtrl');
//   $scope.today = function() {
//     $scope.dt = new Date();
//   };
//   $scope.today();

//   $scope.clear = function() {
//     $scope.dt = null;
//   };

//   $scope.open1 = function() {
//     $scope.popup1.opened = true;
//   };

//   $scope.popup1 = {
//     opened: false
//   };

//   function getDayClass(data) {
//     var date = data.date,
//       mode = data.mode;
//     if (mode === 'day') {
//       var dayToCheck = new Date(date).setHours(0,0,0,0);

//       for (var i = 0; i < $scope.events.length; i++) {
//         var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

//         if (dayToCheck === currentDay) {
//           return $scope.events[i].status;
//         }
//       }
//     }

//     return '';
//   }
// });
