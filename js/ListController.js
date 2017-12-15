angular.module('app')
.controller('ListController', function($scope, MailUtility, $location) {
	$scope.checkedMail = new Set();
    $scope.mails = MailUtility.getMails();

    $scope.viewMail = function(mail) {
        console.log(mail);
        console.log($scope.mails)
        // if ($scope.checkedMail.indexOf(mail.id) > 0) {
        // 	$scope.checkedMail.re
        // }
        // debugger
        // $location.path('fdsfdfdsfdsfds');
        if ($scope.checkedMail.has(mail.id)) {
        	$scope.checkedMail.delete(mail.id);
        }
        else {
        	$scope.checkedMail.add(mail.id);
        }
        console.log($scope.checkedMail);
    };
});
