'use strict';
    var App = angular.module('Manager_app', ['ui.router', 'dir'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/Dashboard/Tenants');
            $stateProvider.
                state('Dashboard', {
                    url: '/Dashboard',
                    templateUrl: 'Partials/manager-dashboard.html'
                }).
                state('Dashboard.Tenants', {
                    url: '/Tenants',
                    templateUrl: 'Partials/dashboard-tab-tenants.html',
                    controller: 'DashTenantsController'
                }).
                state('Dashboard.Managers', {
                    url: '/Managers',
                    templateUrl: 'Partials/dashboard-tab-managers.html',
                    controller: 'DashManagersController'
                }).
                state('Dashboard.Recruiters', {
                    url: '/Recruiters',
                    templateUrl: 'Partials/dashboard-tab-recruiters.html',
                    controller: 'DashRecruitersController'
                }).
                state('Dashboard.Providers', {
                    url: '/Providers',
                    templateUrl: 'Partials/dashboard-tab-providers.html',
                    controller: 'DashProvidersController'
                }).
                state('Supplies', {
                    url: '/Supplies',
                    templateUrl: 'Partials/manager-supplies.html',
                    controller: 'SuppliesController'
                }).
                state('Users', {
                    url: '/Users',
                    templateUrl: 'Partials/manager-users.html',
                    controller: 'UsersController'
                });
                
        })
        .controller('DashboardController', function ($scope) {

        })

        .controller('DashTenantsController', function ($scope) {

        })
        .controller('DashManagersController', function ($scope) {
            $scope.demo = "This is the Dashboard Managers View"

        })
        .controller('DashRecruitersController', function ($scope) {

            $scope.demo = "This is the Dashboard Recruiters View"
        })
        .controller('DashProvidersController', function ($scope) {

            $scope.demo = "This is the Dashboard Providers View"
        })
        .controller('SuppliesController', function ($scope) {
            $scope.demo = "This is the Supplies View"
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

