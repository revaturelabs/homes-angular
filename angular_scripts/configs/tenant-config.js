'use strict';
var App = angular.module('StartApp.tenantApp', ['ui.router', 'tenantDir', 'angularUtils.directives.dirPagination'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/Tenants/Dashboard');
        $stateProvider.
            state('Tenants.Dashboard', {
                url: '/TenantDashboard',
                templateUrl: 'templates/Tenants/Partials/tenant-dashboard.html',
                controller: 'TenantsDashboardController'
            }).
            state('Tenants.Maintenance', {
                url: '/TenantsMaintenance',
                templateUrl: 'templates/Tenants/Partials/tenant-maintenance.html',
                controller: 'TenantsMaintenanceController'
            }).
            state('Tenants.Supplies', {
            url: '/TenantsSupplies',
            templateUrl: 'templates/Tenants/Partials/tenant-supplies.html',
            controller: 'TenantsSuppliesController'
            }).
            state('Tenants.Profile', {
                url: '/TenantsProfile',
                templateUrl: 'templates/Tenants/Partials/tenant-profile.html',
                controller: 'TenantsProfileController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });