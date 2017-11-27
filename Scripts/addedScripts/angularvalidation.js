var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function ($scope) {
		
    $scope.submitForm = function () {

        if ($scope.userForm.$valid) {
            alert('our form is amazing');
        }

    };

});