'use strict';
var App = angular.module('StartApp.managerApp', ['ui.router', 'managerDir'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/Managers/Dashboard/suppliesRequests');
        $stateProvider.
            state('Managers.Dashboard', {
                url: '/Dashboard',
                templateUrl: 'templates/Managers/Partials/manager-dashboard.html',
                controller: 'DashboardController'
            }).
            state('Managers.Dashboard.suppliesRequests', {
                url: '/suppliesRequests',
                templateUrl: 'templates/Managers/Partials/dashboard-tab-supplies.html',
                controller: 'DashSuppliesController'
            }).
            state('Managers.Dashboard.Maintenance', {
                url: '/Maintenance',
                templateUrl: 'templates/Managers/Partials/dashboard-tab-maintenance.html',
                controller: 'DashMaintenanceController'
            }).
            state('Managers.Dashboard.Housing', {
                url: '/Housing',
                templateUrl: 'templates/Managers/Partials/dashboard-tab-housing.html',
                controller: 'DashHousingController'
            }).
            state('Managers.Dashboard.Batches', {
                url: '/AllBatches',
                templateUrl: 'templates/Managers/Partials/dashboard-tab-batches.html',
                controller: 'DashBatchesController'
            }).
            state('Managers.Supplies', {
                url: '/Supplies',
                templateUrl: 'templates/Managers/Partials/manager-supplies.html',
                controller: 'SuppliesController'
            }).
            state('Managers.Users', {
                url: '/Users',
                templateUrl: 'templates/Managers/Partials/manager-users.html',
                controller: 'UsersController'
            }).
            state('Managers.Users.Tenants', {
                url: '/Tenants',
                templateUrl: 'templates/Managers/Partials/users-tab-tenants.html',
                controller: 'UsersTenantsController'
            }).
            state('Managers.Users.Managers', {
                url: '/Managers',
                templateUrl: 'templates/Managers/Partials/users-tab-managers.html',
                controller: 'UsersManagersController'
            }).
            state('Managers.Users.Recruiters', {
                url: '/Recruiters',
                templateUrl: 'templates/Managers/Partials/users-tab-recruiters.html',
                controller: 'UsersRecruitersController'
            }).
            state('Managers.Users.Providers', {
                url: '/Providers',
                templateUrl: 'templates/Managers/Partials/users-tab-providers.html',
                controller: 'UsersProvidersController'
            }).
            state('Managers.Users.Batches', {
                url: '/Batches',
                templateUrl: 'templates/Managers/Partials/users-tab-batches.html',
                controller: 'UsersBatchesController'
            }).
            state('Managers.Profile', {
                url: '/Profile'
                // templateUrl: 'templates/Managers/Partials/users-tab-providers.html',
                //  controller: 'DashProvidersController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
 

