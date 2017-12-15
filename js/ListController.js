angular.module('app')
.controller('ListController', function($scope, MailUtility) {
    $scope.mails = MailUtility.getMails();

    $scope.viewMail = function(mail) {
        console.log(mail);
    };
});
