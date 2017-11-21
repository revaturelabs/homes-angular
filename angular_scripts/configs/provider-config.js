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
        .controller('ProvidersDashboardController', function ($scope) {

        })    
        .controller('ProviderHousingController', function ($scope) {
            $scope.demo = "This is the Housing View"
        })
        .controller('AppController', function ($scope, $rootScope) {
            function CallAddButton(name) {
                $scope.demo = name;
            };

            $rootScope.$on("CallAddButton", function (event, name) {
                CallAddButton(name);
            });
        });

