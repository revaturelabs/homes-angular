//COMPLETED - Need to review.

'use strict';
angular.module('StartApp.managerApp')
    .controller("managerCtrl", function ($http, $scope) {


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
    .controller('DashBatchesController', function ($scope) {
        $scope.demo = "This is the Dashboard Batches View"
    })
    .controller('DashProvidersController', function ($scope) {

        $scope.demo = "This is the Dashboard Providers View"
    })
    .controller('SuppliesController', function ($scope, SuppliesFactory) {

        $scope.demo = "This is the Supplies View"

        getSupplies();

        function getSupplies() {
            SuppliesFactory.getSupplies()
                .then(function (response) {
                    $scope.supplies = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Supplies: ' + error.message;
                });

        };
    })
    .controller('UsersController', function ($scope) {
        $scope.demo = "This is the Users View"
     
    });