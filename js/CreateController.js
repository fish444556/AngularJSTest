angular.module('app')
.controller('CreateController',  function($scope) {
	$scope.test = 'hi';
	$scope.to = '';

	$scope.submit = function() {
		if ($scope.to) {
			// $scope.to = $scope.to;
		}
	};
});
