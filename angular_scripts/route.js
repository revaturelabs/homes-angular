var app = angular.module('routes', ['ngRoute']);

  app.config(function ($routeProvider, $locationProvider) {

      $routeProvider
          .when('/', {
          templateUrl: 'index.html'

      })
          .when('/manager', {
          templateUrl: './Web/Manager/Index.html',
          controller: 'managerController'
          })

          .otherwise({
          redirectTo: "/"
          });
      $locationProvider.html5Mode(true);
  });