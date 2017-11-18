'use strict';
    var App = angular.module('providerApp', ['ui.router', 'dir'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/Dashboard');
            $stateProvider.
                state('Dashboard', {
                    url: '/Dashboard',
                    templateUrl: 'Partials/provider-dashboard.html'
                }).

                state('Housing', {
                    url:'/Housing',
                    templateUrl: 'Partials/provider-housing.html',
                    controller: 'HousingController'
                });
            // use the HTML5 History API
            $locationProvider.html5Mode(true);
        })
        .controller('DashboardController', function ($scope) {

        })

        .controller('DashTenantsController', function ($scope) {

        })      
        .controller('HousingController', function ($scope) {
            $scope.demo = "This is the Housing View"
        })
        .controller('UsersController', function ($scope) {
            $scope.demo = "This is the Users View"
        })
        .controller('AppController', function ($scope, $rootScope) {
            function CallAddButton(name) {
                $scope.demo = name;
            };

            $rootScope.$on("CallAddButton", function (event, name) {
                CallAddButton(name);
            });
        });

