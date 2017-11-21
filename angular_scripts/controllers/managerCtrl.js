//COMPLETED - Need to review.

'use strict';
angular.module('StartApp.managerApp')
    .controller("managerCtrl", function ($http, $scope) {


    })

    .controller('listdata', function ($scope, $http) {
        $scope.users = [{ "id": 1, "first_name": "Heather", "last_name": "Bell", "hobby": "Eating" },
        { "id": 2, "first_name": "Andrea", "last_name": "Dean", "hobby": "Gaming" },
        { "id": 3, "first_name": "Peter", "last_name": "Barnes", "hobby": "Reading Books" },
        { "id": 4, "first_name": "Harry", "last_name": "Bell", "hobby": "Youtubing" },
        { "id": 5, "first_name": "Deborah", "last_name": "Burns", "hobby": "Fishing" },
        { "id": 6, "first_name": "Larry", "last_name": "Kim", "hobby": "Skipping" },
        { "id": 7, "first_name": "Jason", "last_name": "Wallace", "hobby": "Football" },
        { "id": 25, "first_name": "Russell", "last_name": "Patterson", "hobby": "Singing" }]; //declare an empty array
       
        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
    })
    
    .controller('DashManagersController', function ($scope, managementsFactory) {

        $scope.status;
        $scope.managers;
        $scope.postManager;
        $scope.putManager;
        $scope.deleteManager;

        getManagers();

        function getManagers() {
            managementsFactory.getManagers()
                .then(function (response) {
                    $scope.managers = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Managers: ' + error.message;
                });

        };

        $scope.getManagersById = function getManagersById(id) {
            managementsFactory.getManagersById(id)
                .then(function (response) {
                    $scope.managersById = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Manager by Id: ' + error.message;
                });

        };

        $scope.postManager = function postManager(managers) {
            managementsFactory.postManager(managers)
                .then(function (response) {
                    $scope.managers = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Post Manager: ' + error.message;
                });
        };

        $scope.putManager = function putManager(manager) {
            managementsFactory.putManager(manager)
                .then(function (response) {
                    $scope.manager = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Put Manager: ' + error.message;
                });
        };

        $scope.deleteManager = function deleteManager(id) {
            managementsFactory.deleteManager(id)
                .then(function (response) {
                    $scope.manager = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Delete Manager: ' + error.message;
                });
        };


    })
      //  $scope.status;
      //  $scope.genders;
        
      //  postGender();
      //  getGenders();
      //     **** FUNCTION TO BE CALL INSIDE THE CONTROLLER ****
        //    ***** Function that send the id of gender that wants to get *****
        //  function getGenders(id) {
        //    genderFactory.getGenders(id)
        //        .then( function (response) {
        //            $scope.genders = response.data;
        //        }, function (error) {
        //            $scope.status = 'Unable to load Genders: ' + error.message;
        //        });
        //}
     //     **** FUNCTION TO BE CALL OUTSIDE CONTROLLER INSIDE HTML
        //    ***** Sames as above but function make a call to receive all genders *****
      //$scope.getGender =  function getGender() {
      //      genderFactory.getGender()
      //          .then(function (response) {
      //              $scope.genders = response.data;
      //          }, function (error) {
      //              $scope.status = 'Unable to load Genders: ' + error.message;
      //          });
      //  }
      //    ***** Function that send the new gender to post in the database *****
      //$scope.postGender =  function postGender(gender) {
      //      genderFactory.postGender(gender)
      //          .then(function (response) {
      //              $scope.genders = response.data;
      //          }, function (error) {
      //              $scope.status = 'Unable to insert Genders: ' + error.message;
      //          });
      //  }


    //})

    .controller('DashboardController', function ($scope) {

    })

    .controller('DashTenantsController', function ($scope) {

    })

    .controller('DashRecruitersController', function ($scope) {

        $scope.demo = "This is the Dashboard Recruiters View"
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