'use strict';

var cid = 'f80f50bd-d1ac-4545-95fb-ce884f682fda';
var App = angular.module('StartApp', ['ui.router', 'AdalAngular', 'StartApp.managerApp', 'StartApp.providerApp', 'StartApp.tenantApp'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'adalAuthenticationServiceProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider,$locationProvider, adalProvider, $httpProvider) {

        adalProvider.init(
            {
                instance: 'https://login.microsoftonline.com/',
                tenant: 'andresgllive764.onmicrosoft.com/',
                clientId: cid,
                popUp: false
                //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
            },
            $httpProvider
        );

        $urlRouterProvider.otherwise('/Login');
        $stateProvider.
            state('Login', {
                url: '/Login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            }).
            state('Logout', {
                url: '/Logout',
                templateUrl: 'templates/login.html',
                controller: 'LogoutController'
            }).
            state('Managers', {
                url: '/Managers',
                templateUrl: 'templates/Managers/Index.html'
            }).
            state('Providers', {
                url: '/Providers',
                templateUrl: 'templates/Providers/Index.html'
              //  controller: 'HousingController'
            }).
            state('Tenants', {
                url: '/Tenants',
                templateUrl: 'templates/Tenants/Index.html'
                //  controller: 'HousingController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
      
    }])
    .controller('LoginController', ['$scope', '$state', 'adalAuthenticationService', '$location', '$rootScope', function($scope, $state, adalService, $location, $rootScope) {
        //$scope.changeView = function () {
        //    $state.go('Managers.Dashboard.suppliesRequests');
        //};
        $scope.reroute = function () {
            if ($scope.userInfo.isAuthenticated === false) {
            }
            else {
                for (var i = 0; i < $scope.userInfo.profile.groups.length; i++) {
                    if ($scope.userInfo.profile.groups[i] === '51ba291a-df07-44d6-a4c6-cabe1fe756f4') {
                        $state.go('Managers.Dashboard.suppliesRequests', {}, { location: "replace", reload: false });
                    }
                    if ($scope.userInfo.profile.groups[i] === 'f143cad2-5a31-436e-b097-28010f1dddb9') {
                        $state.go('Providers.Dashboard', {}, { location: "replace", reload: false });
                    }
                    if ($scope.userInfo.profile.groups[i] === '7c4a9ef6-6150-4e67-85c1-0cdd6209a6ec' ||
                        $scope.userInfo.profile.groups[i] === '1a77fa18-5261-464a-80c5-32556ae32d02')
                    {
                        $state.go('Tenants.Dashboard', {}, { location: "replace", reload: false });
                    }
                }
            }
        };
        $scope.adallogin = function () {
            if ($scope.userInfo.isAuthenticated) {
                adalService.logOut().then(function (success) { }, function (error) { });
            }
            adalService.login().then(function (success) { }, function (error) { });
        };
        $scope.adallogout = function () {
            adalService.logOut().then(function (success) { }, function (error) { });
        };

    }])
    .controller('LogoutController', ['$scope', '$state', 'adalAuthenticationService', '$location', function ($scope, $state, adalService, $location) {
        $scope.reroute = function () {
            
            if ($scope.userInfo.isAuthenticated) {
                adalService.logOut().then(function (success) {
                    window.location.reload();
                    $state.go('Logout');
                }, function (error) { });
            }
            else {
                $state.go('Logout');
            }

        };
    }])
    .controller('StartManagerController', function ($scope, $log, $window) {

    })
    .controller('StartHousingController', function ($scope) {
        $scope.demo = "This is the Housing View";
    })
    .controller('StartUsersController', function ($scope) {
        $scope.demo = "This is the Users View";
    });

