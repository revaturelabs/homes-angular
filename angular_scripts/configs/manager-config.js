'use strict';
var App = angular.module('StartApp.managerApp', ['ui.router', 'managerDir'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/Managers/Dashboard/suppliesRequests');
        $stateProvider.
            state('Managers.Dashboard', {
                url: '/Dashboard',
                templateUrl: 'templates/Managers/Partials/manager-dashboard.html'
            }).
            state('Managers.Dashboard.suppliesRequests', {
                url: '/suppliesRequests',
                templateUrl: 'templates/Managers/Partials/dashboard-tab-supplies.html'
            }).
            state('Managers.Dashboard.Maintenance', {
                url: '/Maintenance',
                templateUrl: 'templates/Managers/Partials/dashboard-tab-maintenance.html'
            }).
            state('Managers.Dashboard.Housing', {
                url: '/Housing',
                templateUrl: 'templates/Managers/Partials/dashboard-tab-housing.html'
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
                controller: 'DashTenantsController'
            }).
            state('Managers.Users.Managers', {
                url: '/Managers',
                templateUrl: 'templates/Managers/Partials/users-tab-managers.html',
                controller: 'DashManagersController'
            }).
            state('Managers.Users.Recruiters', {
                url: '/Recruiters',
                templateUrl: 'templates/Managers/Partials/users-tab-recruiters.html',
                controller: 'DashRecruitersController'
            }).
            state('Managers.Users.Providers', {
                url: '/Providers',
                templateUrl: 'templates/Managers/Partials/users-tab-providers.html',
                controller: 'DashProvidersController'
            }).
            state('Managers.Users.Batches', {
                url: '/Batches',
                templateUrl: 'templates/Managers/Partials/users-tab-batches.html',
                controller: 'DashProvidersController'
            }).
            state('Managers.Profile', {
                url: '/Profile'
                // templateUrl: 'templates/Managers/Partials/users-tab-providers.html',
                //  controller: 'DashProvidersController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })
    .controller('DashboardController', function ($scope) {

    })

    .controller('DashTenantsController', function ($scope) {

    })

    .controller('DashManagersController', function ($scope, genderFactory) {
        $scope.status;
        $scope.genders;

        getGenders();

        function getGenders() {
            genderFactory.getGenders()
                .then(function (response) {
                    $scope.genders = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Genders: ' + error.message;
                });
        }


    })
    .controller('DashRecruitersController', function ($scope) {

        $scope.demo = "This is the Dashboard Recruiters View";
    })
    .controller('DashProvidersController', function ($scope) {

        $scope.demo = "This is the Dashboard Providers View"
    })
    .controller('SuppliesController', function ($scope) {
        $scope.demo = "This is the Supplies View"
    })
    .controller('UsersController', function ($scope) {
        $scope.demo = "This is the Users View"
    });

