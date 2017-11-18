'use strict';
var App = angular.module('StartApp.providerApp', ['ui.router', 'providerDir'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/Providers/Dashboard');
            $stateProvider.
                state('Providers.Dashboard', {
                    url: '/Dashboard',
                    templateUrl: 'templates/Providers/Partials/provider-dashboard.html'
                }).
                state('Providers.Housing', {
                    url:'/Housing',
                    templateUrl: 'templates/Providers/Partials/provider-housing.html',
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

