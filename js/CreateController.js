angular.module('app')
.controller('CreateController', function($scope, MailUtility, $location) {
	$scope.to = '';
	$scope.subject = '';
	$scope.content = '';
	$scope.obj = {};

	$scope.submit = function() {
		$scope.obj['to'] = $scope.to;
		$scope.obj['subject'] = $scope.subject;
		$scope.obj['content'] = $scope.content;
		MailUtility.createMail($scope.obj);
		$location.path('/');
	};
});
