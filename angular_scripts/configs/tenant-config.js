﻿'use strict';
var App = angular.module('StartApp.tenantApp', ['ui.router', 'tenantDir'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/Tenant/Dashboard');
        $stateProvider.
            state('Tenant.Dashboard', {
                url: '/Dashboard',
                templateUrl: 'templates/Tenants/Partials/tenant-dashboard.html'
            }).
            state('Tenant.Housing', {
                url: '/Housing',
                templateUrl: 'templates/Tenants/Partials/tenant-room_Maintenance.html',
                controller: 'HousingController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })
    .controller('DashboardController', function ($scope) {

    });