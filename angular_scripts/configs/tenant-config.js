'use strict';
var App = angular.module('StartApp.tenantApp', ['ui.router', 'tenantDir'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/Tenants/Dashboard');
        $stateProvider.
            state('Tenants.Dashboard', {
                url: '/Dashboard',
                templateUrl: 'templates/Tenants/Partials/tenant-dashboard.html'
            }).
            state('Tenants.Maintenance', {
                url: '/Maintenance',
                templateUrl: 'templates/Tenants/Partials/tenant-maintenance.html',
                controller: 'MaintenanceController'
            }).
            state('Tenants.Supplies', {
            url: '/TenantSupplies',
            templateUrl: 'templates/Tenants/Partials/tenant-supplies.html',
            controller: 'TenantSuppliesController'
            }).
            state('Tenants.Profile', {
                url: '/Profile',
                templateUrl: 'templates/Tenants/Partials/tenant-profile.html',
                controller: 'ProfileController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })
    .controller('DashboardController', function ($scope) {

    })
    .controller('MaintenanceController', function ($scope) {
        $scope.demo = "Inside Maintenance"
    })
    .controller('TenantSuppliesController', function ($scope) {
        $scope.demo = "Inside Supplies"
    })
    .controller('ProfileController', function ($scope) {
        $scope.demo = "Inside Profile"
    });