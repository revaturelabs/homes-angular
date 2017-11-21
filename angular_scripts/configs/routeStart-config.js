'use strict';

var cid = 'f80f50bd-d1ac-4545-95fb-ce884f682fda';
var App = angular.module('StartApp', ['ui.router', 'AdalAngular', 'StartApp.managerApp', 'StartApp.providerApp', 'StartApp.tenantApp'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'adalAuthenticationServiceProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider,$locationProvider, adalProvider, $httpProvider) {

        adalProvider.init(
            {
                instance: 'https://login.microsoftonline.com/',
                tenant: 'andresgllive764.onmicrosoft.com/',
                clientId: cid,
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
            state('Logout', {
                url: '/Logout',
                templateUrl: 'templates/login.html',
                controller: 'LogoutController'
            }).
            state('Managers', {
                url: '/Managers',
                templateUrl: 'templates/Managers/Index.html'
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
    .controller('LoginController', ['$scope', '$state', 'adalAuthenticationService', '$location', '$rootScope', function($scope, $state, adalService, $location, $rootScope) {
        //$scope.changeView = function () {
        //    $state.go('Managers.Dashboard.suppliesRequests');
        //};
        $scope.reroute = function () {
            console.log("Login controller");
            if ($scope.userInfo.isAuthenticated === false) {
                console.log("saying hi");
            }
            else {
                for (var i = 0; i < $scope.userInfo.profile.groups.length; i++) {
                    if ($scope.userInfo.profile.groups[i] === '51ba291a-df07-44d6-a4c6-cabe1fe756f4') {
                        $state.go('Providers.Dashboard');
                        console.log("Sent to manager");
                    }
                    if ($scope.userInfo.profile.groups[i] === 'f143cad2-5a31-436e-b097-28010f1dddb9') {
                        $state.go('Providers');
                        console.log("Sent to provider");
                    }
                    if ($scope.userInfo.profile.groups[i] === '7c4a9ef6-6150-4e67-85c1-0cdd6209a6ec') {
                        $state.go('Tenant');
                        console.log("Sent to tenant");
                    }

                    //if ($scope.userInfo.profile.name === "Manager") {
                    //    $state.go('Managers.Dashboard.suppliesRequests');
                    //    console.log($scope.userInfo);
                    //}
                    //else {
                    //    $state.go('Tenants');
                    //}
                }
                //if (useristenant) {
                //    $state.go('Tenants');
                //}
                //if (userisprovider) {
                //    $state.go('Providers');
                //}
                console.log($scope.userInfo.groups);
                //sessionStorage[
            }
        };
        $scope.adallogin = function () {
            if ($scope.userInfo.isAuthenticated) {
                adalService.logOut().then(function (success) { }, function (error) { });
            }
            console.log("hello");
            adalService.login().then(function (success) { }, function (error) { });
        };
        $scope.adallogout = function () {
            console.log("hello");
            adalService.logOut().then(function (success) { }, function (error) { });
            //if ($scope.userInfo.isAuthenticated === false)
            //$state.go('Login');
        };

    }])
    .controller('LogoutController', ['$scope', '$state', 'adalAuthenticationService', '$location', function ($scope, $state, adalService, $location) {
        $scope.reroute = function () {
            console.log("Logout controller");
            
            if ($scope.userInfo.isAuthenticated) {
                adalService.logOut().then(function (success) {
                    //$state.go('Login');
                    $location.path('/');
                }, function (error) { });
                
                //$state.go('Login');
            }
            else {
                $location.path('/');
            }
            //$state.go('Login');
            //$location.path('');
        };
    }])
    .controller('StartManagerController', function ($scope, $log, $window) {



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
    .controller('StartHousingController', function ($scope) {
        $scope.demo = "This is the Housing View";
    })
    .controller('StartUsersController', function ($scope) {
        $scope.demo = "This is the Users View";
    });

