angular.module('app')
.controller('MailController', function($scope, $location, $routeParams, MailUtility) {
    if (!$routeParams.id) {
        $location.path('/');
    }

    $scope.mails = MailUtility.getMails();
    $scope.mail = $scope.mails[$routeParams.id - 1];
    $scope.to = $scope.mail.to;
    $scope.subject = $scope.mail.subject;
    $scope.text = $scope.mail.text;
    $scope.id = $routeParams.id;

    $scope.findPrev = function () {
    	let $idx = 0;
    	$scope.mails.map((ele, $index) => {
    		if (ele.id === $scope.id) {
    			$idx = $index;
    			break;
    		}
    	});
    }

    $scope.viewMail = function(type) {
    	debugger
    	if (type === "prev") {
    		$scope.id = parseInt($scope.id) - 1;
    	}
    	else {
    		$scope.id = parseInt($scope.id) + 1;
    	}
    	$scope.mails.map((ele) => {
    		if (ele.id === $scope.id) {
    			$location.path('mail/' + ele.id);
    		}
    	});
    };
});
