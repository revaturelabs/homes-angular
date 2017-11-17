'use strict';
var App = angular.module('StartApp', ['ui.router', 'dir'])
    .config(function ($stateProvider, $urlRouterProvider) {

     //   $urlRouterProvider.otherwise('/Dashboard');
        $stateProvider.
            state('Managers', {
                url: '/Managers',
                templateUrl: 'Managers/Index.html'
            }).
            state('Providers', {
                url: '/Providers',
                templateUrl: 'Providers/Index.html'
              //  controller: 'HousingController'
            }).
            state('Tenants', {
                url: '/Tenants',
                templateUrl: 'Tenants/Index.html'
                //  controller: 'HousingController'
            });

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

