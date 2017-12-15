angular.module('app')
.controller('MailController', function($scope, $location, $routeParams) {
    if (!$routeParams.id) {
        $location.path('/');
    }
});
