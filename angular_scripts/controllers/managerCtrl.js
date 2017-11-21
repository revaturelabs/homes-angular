//COMPLETED - Need to review.

'use strict';
angular.module('StartApp.managerApp')
    .controller("DashboardController", function ($http, $scope) {


    })
    .controller('DashSuppliesController', function ($scope) {

        $scope.demo = "This is the Dashboard Providers View"
    })
    .controller('DashMaintenanceController', function ($scope) {

        $scope.demo = "This is the Dashboard Providers View"
    })
    .controller('DashHousingController', function ($scope) {

        $scope.demo = "This is the Dashboard Providers View"
    }).controller('DashBatchesController', function ($scope) {

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

    })
    .controller('UsersTenantsController', function ($scope) {

    })
    .controller('UsersManagersController', function ($scope, managementsFactory) {

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
    .controller('UsersRecruitersController', function ($scope) {

        $scope.demo = "This is the Dashboard Recruiters View"
    })
    .controller('UsersProvidersController', function ($scope) {

        $scope.demo = "This is the Dashboard Providers View"
    })
    .controller('UsersBatchesController', function ($scope) {
        $scope.demo = "This is the Dashboard Batches View"
    });


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
      
   
    
    
   