(function () {
    var App = angular.module('App', <'ngRoute'])       
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/Tenants', {
                    templateUrl: 'TabOptions/tenantTab.html',
                    controller: 'TenantsController'
                }).
                when('/Managers', {
                    templateUrl: 'TabOptions/managerTab.html',
                    controller: 'ManagersController'
                }).
                when('/Recruiters', {
                    templateUrl: '',
                    controller: 'RecruitersController'
                }).
                when('/Providers', {
                    templateUrl: 'templates/Tenants/TenantsIndex.html',
                    controller: 'ProvidersController'
                }).
                otherwise({
                    redirectTo: '/Tenants'
                });
        })     
        .controller('AppController', function ($scope, $rootScope) {
            function CallAddButton(name) {
                $scope.demo = name;
            };

            $rootScope.$on("CallAddButton", function (event,name) {
                   CallAddButton(name);
            });         
        });

    
})();
