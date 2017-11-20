'use strict';
var App = angular.module('StartApp', ['ui.router', 'AdalAngular', 'StartApp.managerApp', 'StartApp.providerApp', 'StartApp.tenantApp'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'adalAuthenticationServiceProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider,$locationProvider, adalProvider, $httpProvider) {

        adalProvider.init(
            {
                instance: 'https://login.microsoftonline.com/',
                tenant: 'andresgllive764.onmicrosoft.com/',
                clientId: 'f80f50bd-d1ac-4545-95fb-ce884f682fda',
                popUp: false
                //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
            },
            $httpProvider
        );



        $urlRouterProvider.otherwise('/Login');
        $stateProvider.
            state('Login', {
                url: '/Login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            }).
            state('Managers', {
                url: '/Managers',
                templateUrl: 'templates/Managers/Index.html',
                controller: 'ManagerController'
               
            }).
            state('Providers', {
                url: '/Providers',
                templateUrl: 'templates/Providers/Index.html'
              //  controller: 'HousingController'
            }).
            state('Tenants', {
                url: '/Tenants',
                templateUrl: 'templates/Tenants/Index.html'
                //  controller: 'HousingController'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
      
    }])
    .controller('LoginController', ['$scope', '$state', 'adalAuthenticationService', '$location', function($scope, $state, adalService, $location) {
        $scope.changeView = function () {
            $state.go('Managers.Dashboard.suppliesRequests');
        };
        $scope.reroute = function () {
            if ($scope.userInfo.isAuthenticated === false) {
                console.log("saying hi");
            }
            else {
                if ($scope.userInfo.profile.name === "Manager") {
                    $state.go('Managers');
                }
                else {
                    $state.go('Tenants');
                }
                //if (useristenant) {
                //    $state.go('Tenants');
                //}
                //if (userisprovider) {
                //    $state.go('Providers');
                //}
                console.log($scope.userInfo);
            }
        };
        $scope.adallogin = function () {
            console.log("hello");
            adalService.login();
        };

    }])
    .controller('ManagerController', function ($scope, $log, $window) {



        //$scope.ClickMeToRedirect = function () {
        //    var url = "http://" + $window.location.host + "/templates/Managers/Index.html";
        //    $log.log(url);
        //    $window.location.href = url;                                                               
        //};


        //$scope.login = function () {
        //    adalService.login();
        //};
        //$scope.logout = function () {
        //    adalService.logOut();
        //};
        //$scope.isActive = function (viewLocation) {
        //    return viewLocation === $location.path();
        //};





        //$scope.error = "";
        //$scope.loadingMessage = "Loading...";
        //$scope.todoList = null;
        //$scope.editingInProgress = false;
        //$scope.newTodoCaption = "";


        //$scope.editInProgressTodo = {
        //    Description: "",
        //    ID: 0
        //};



        //$scope.editSwitch = function (todo) {
        //    todo.edit = !todo.edit;
        //    if (todo.edit) {
        //        $scope.editInProgressTodo.Description = todo.Description;
        //        $scope.editInProgressTodo.ID = todo.ID;
        //        $scope.editingInProgress = true;
        //    } else {
        //        $scope.editingInProgress = false;
        //    }
        //};

        //$scope.populate = function () {
        //    todoListSvc.getItems().success(function (results) {
        //        //debugger;
        //        $scope.todoList = results;

        //        $scope.loadingMessage = "";
        //    }).error(function (err) {
        //        if (err.access_token) {
        //            // Re-request the token with additional claims (supposing here the service only returns the claims parameter)
        //            adalService.acquireTokenRedirect('/api/TodoList', null, JSON.stringify(err));
        //        }
        //        $scope.error = err;
        //        $scope.loadingMessage = "";
        //    })
        //};
        //$scope.delete = function (id) {
        //    todoListSvc.deleteItem(id).success(function (results) {
        //        $scope.loadingMessage = "";
        //        $scope.populate();
        //    }).error(function (err) {
        //        $scope.error = err;
        //        $scope.loadingMessage = "";
        //    })
        //};
        //$scope.update = function (todo) {
        //    todoListSvc.putItem($scope.editInProgressTodo).success(function (results) {
        //        $scope.loadingMsg = "";
        //        $scope.populate();
        //        $scope.editSwitch(todo);
        //    }).error(function (err) {
        //        $scope.error = err;
        //        $scope.loadingMessage = "";
        //    })
        //};
        //$scope.add = function () {

        //    todoListSvc.postItem({
        //        'Description': $scope.newTodoCaption,
        //        'Owner': adalService.userInfo.userName
        //    }).success(function (results) {
        //        $scope.loadingMsg = "";
        //        $scope.newTodoCaption = "";
        //        $scope.populate();
        //    }).error(function (err) {
        //        $scope.error = err;
        //        $scope.loadingMsg = "";
        //    })
        //};
    })

    .controller('DashTenantsController', function ($scope) {

    })
    .controller('HousingController', function ($scope) {
        $scope.demo = "This is the Housing View";
    })
    .controller('UsersController', function ($scope) {
        $scope.demo = "This is the Users View";
    })
    .controller('AppController', function ($scope, $rootScope) {
        function CallAddButton(name) {
            $scope.demo = name;
        };

        $rootScope.$on("CallAddButton", function (event, name) {
            CallAddButton(name);
        });
    });

