angular.module('app')
.controller('ListController', function($scope, MailUtility, $location) {
	$scope.checkedMails = new Set();
    $scope.mails = MailUtility.getMails();

    $scope.viewMail = function(mail) {
        console.log(mail);

    };

    $scope.checkedMailFunc = function (mail) {
        if ($scope.checkedMails.has(mail.id)) {
            $scope.checkedMails.delete(mail.id);
        }
        else {
            $scope.checkedMails.add(mail.id);
        }
        console.log($scope.checkedMails);
    }

    $scope.deleteCheckedMail = function () {
        MailUtility.deleteMails([...$scope.checkedMails])
        $scope.mails = MailUtility.getMails();
    }
});
