//COMPLETED - Need to review.

'use strict';
angular.module('StartApp.managerApp')
    .controller("DashboardController", function ($http, $scope) {


    })
    .controller('DashSuppliesController', function ($scope) {


        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('DashMaintenanceController', ['maintenanceRequestsSrvc', '$scope', function (maintenanceRequestsSrvc, $scope) {
        $scope.populate = function () {
            //console.log(maintenanceSrvc);
            maintenanceRequestsSrvc.getMaintenanceRequests().then(
                function (success) {
                    console.log('success', success);
                    $scope.maintenanceRequests = success.data;
                },
                function (error) {
                    console.log('error', error);
                }
            );
        };

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    }])
    .controller('DashHousingController', function ($scope) {

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
    })
    .controller('DashBatchesController', function ($scope, batchesFactory) {

        getBatches();

        function getBatches() {
            batchesFactory.getBatches()
                .then(function (response) {
                    $scope.batches = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Batches: ' + error.message;
                });

        };
        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('SuppliesController', function ($scope, suppliesFactory) {

        getSupplies();

        function getSupplies() {
            suppliesFactory.getSupplies()
                .then(function (response) {
                    $scope.supplies = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Supplies: ' + error.message;
                });

        };
        
        $scope.postSupply = function (supplyName) {
            suppliesFactory.postSupply(supplyName)
                .then(function (response) {
                    $scope.supplies = response.data;
                }, function (error) {
                    $scope.status = 'Unable to add Supply: ' + error.message;
                });
        };

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };

        $scope.putSupply = function () {
            var supply =JSON.stringify({ supply: $scope.supply});
            suppliesFactory.putSupply(supply)
                .then(function (response) {
                    $scope.supplies = reponse.data;
                }, function (error) {
                    $scope.status = "Unable to update Supply" + error.message;
               });
        };

        $scope.deleteSupply = function deleteSupply(id) {
            
            suppliesFactory.deleteSupply(id)
                .then(function (response) {
                    $scope.Supply = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Delete Supply: ' + error.message;
                });
        };
    })
    .controller('UsersController', function ($scope) {
        $scope.demo = "This is the Users View";

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
    .controller('UsersBatchesController', ["$scope", "batchesFactory", function ($scope, batchesFactory) {
        //batch info
        $scope.batchName;
        $scope.startDate;
        $scope.endDate;
        //contact info
        //$scope.contactFirstName;
        //$scope.contactLastName;
        //$scope.email;
        //$scope.phone;
        //call batch services
        $scope.status;
        $scope.batches;
        
        $scope.getBatches = function getBatches() {
            batchesFactory.getBatches(batch)
                .then(function (response) {
                    $scope.batches = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Batches: ' + error.message;
                });
        }
        $scope.postBatch = function postBatch() {
            var batch = JSON.stringify({ startDate: $scope.startDate, endDate: $scope.endDate, name: $scope.batchName });
            batchesFactory.postBatch(batch)
                .then(function (response) {
                    $scope.batches = response.data;
                }, function (error) {
                    $scope.status = 'Unable to insert Batch: ' + error.message;
                });
            console.log($scope.batchName);
        };

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
        //call contact services
        //$scope.getContacts = function getContact() {
        //    contactFactory.getContacts(contact)
        //        .then(function (response) {
        //            $scope.contacts = response.data;
        //        }, function (error) {
        //            $scope.status = 'Unable to load Batches: ' + error.message;
        //        });
        //}
        //$scope.postContacts = function postContact(contact) {
        //    contactFactory.postContacts(contact)
        //        .then(function (response) {
        //            $scope.contacts = response.data;
        //        }, function (error) {
        //            $scope.status = 'Unable to insert Batch: ' + error.message;
        //        });
        //    console.log($scope.batchName);
        //}

    }]);


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
      
   
    
    
   