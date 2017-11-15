var app = angular.module('app', ['dir', 'controllers', 'routes', 'AdalAngular'])

.controller('homeCtrl', ['$scope', 'adalAuthenticationService', '$location', function ($scope, adalService, $location) {
    $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    }])

.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    //$routeProvider.when("/Home", {
    //    controller: "homeCtrl",
    //    templateUrl: "/App/Views/Home.html",
    //}).when("/TodoList", {
    //    controller: "todoListCtrl",
    //    templateUrl: "/App/Views/TodoList.html",
    //    requireADLogin: true,
    //}).when("/UserData", {
    //    controller: "userDataCtrl",
    //    templateUrl: "/App/Views/UserData.html",
    //}).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'andresgllive764.onmicrosoft.com/',
            clientId: 'ec61b27c-7bc4-4523-9eac-0605a5559238',
            popUp: false,
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
    );

}]);