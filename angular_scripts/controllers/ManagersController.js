angular.module('App')
    .controller('ManagersController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        CallAddButton();
        $scope.hola = "Hey Corillo";
        function CallAddButton() {
            $rootScope.$emit("CallAddButton", "Add Manager");

         }

        //$scope.logout = function () {
        //    console.log("trying to logout from manager");
        //    $rootScope.adallogout().then(function (success) { }, function (error) { });
        //};
    }]);