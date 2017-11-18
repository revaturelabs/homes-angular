angular.module('App')
    .controller('ManagersController', function ($scope, $rootScope) {
        CallAddButton();
         $scope.hola = "Hey Corillo"
        function CallAddButton() {
            $rootScope.$emit("CallAddButton", "Add Manager");

        };
    });