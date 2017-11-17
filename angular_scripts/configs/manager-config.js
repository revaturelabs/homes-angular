'use strict';
    var App = angular.module('managerApp', ['ui.router', 'dir'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/Dashboard/dashSupplies');
            $stateProvider.
                state('Dashboard', {
                    url: '/Dashboard',
                    templateUrl: 'Partials/manager-dashboard.html'
                }).
                state('Dashboard.dashSupplies', {
                    url: '/dashSupplies',
                    templateUrl: 'Partials/dashboard-tab-supplies.html'
                }).
                state('Dashboard.Maintenance', {
                    url: '/Maintenance',
                    templateUrl: 'Partials/dashboard-tab-maintenance.html'
                }).
                state('Dashboard.Housing', {
                    url: '/Housing',
                    templateUrl: 'Partials/dashboard-tab-housing.html'
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
                }).
                state('Users.Tenants', {
                    url: '/Tenants',
                    templateUrl: 'Partials/users-tab-tenants.html',
                    controller: 'DashTenantsController'
                }).
                state('Users.Managers', {
                    url: '/Managers',
                    templateUrl: 'Partials/users-tab-managers.html',
                    controller: 'DashManagersController'
                }).
                state('Users.Recruiters', {
                    url: '/Recruiters',
                    templateUrl: 'Partials/users-tab-recruiters.html',
                    controller: 'DashRecruitersController'
                }).
                state('Users.Providers', {
                    url: '/Providers',
                    templateUrl: 'Partials/users-tab-providers.html',
                    controller: 'DashProvidersController'
                }).
                state('Users.Batches', {
                url: '/Batches',
                templateUrl: 'Partials/users-tab-batches.html',
                controller: 'DashProvidersController'
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

