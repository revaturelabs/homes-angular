var app = angular.module('routes', ['ngRoute']);

  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/manager', {
            templateUrl: 'Web/Manager/Index.html',
            controller: 'MainCtrl'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hasPrefix("!");
});