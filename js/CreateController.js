angular.module('app')
.controller('CreateController', function($scope, MailUtility, $location) {
	$scope.to = '';
	$scope.subject = '';
	$scope.text = '';
	$scope.obj = {};

	$scope.submit = function() {
		$scope.obj['to'] = $scope.to;
		$scope.obj['subject'] = $scope.subject;
		$scope.obj['text'] = $scope.text;
		MailUtility.createMail($scope.obj);
		$location.path('/');
	};
});
