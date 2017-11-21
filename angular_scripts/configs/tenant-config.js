'use strict';
var App = angular.module('StartApp.tenantApp', ['ui.router', 'tenantDir'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/Tenants/Dashboard');
        $stateProvider.
            state('Tenants.Dashboard', {
                url: '/TenantDashboard',
                templateUrl: 'templates/Tenants/Partials/tenant-dashboard.html',
                controller: 'TenantDashboardController'
            }).
            state('Tenants.Maintenance', {
                url: '/TenantMaintenance',
                templateUrl: 'templates/Tenants/Partials/tenant-maintenance.html',
                controller: 'TenantMaintenanceController'
            }).
            state('Tenants.Supplies', {
            url: '/TenantSupplies',
            templateUrl: 'templates/Tenants/Partials/tenant-supplies.html',
            controller: 'TenantSuppliesController'
            }).
            state('Tenants.Profile', {
                url: '/TenantProfile',
                templateUrl: 'templates/Tenants/Partials/tenant-profile.html',
                controller: 'TenantProfileController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });