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
        };
    })
    .controller('DashBatchesController', function ($scope, batchesFactory) {

        getBatches();

        function getBatches() {
            var BatchesRecords = batchesFactory.getBatches();
            BatchesRecords.then(function (d) {     //success
                $scope.batches = d.data;
            },
                function () {
                    $scope.status = 'Unable to load Batches: ' + error.message;
                });
        }

        $scope.postBatch = function postBatch() {
            var batch = JSON.stringify({ startDate: $scope.startDate, endDate: $scope.endDate, name: $scope.batchName });
            batchesFactory.postBatch(batch);
            getBatches();
        };

        $scope.getBatchById = function(batch) {
 
            var singlerecord = batchesFactory.getBatchById(batch.batchId);
            singlerecord.then(function (d) {
 
                var record = d.data;
                $scope.batchId = record.batchId;
                $scope.batchName = record.name;
                $scope.startDate = record.startDate;
                $scope.endDate = record.endDate;
            },
                function () {
                    $scope.status = 'Unable to get Batch: ' + error.message;
                });
        };

        $scope.updateBatch = function () {
            var batch = {
                batchId: $scope.batchId,
                name: $scope.batchName,
                startDate: $scope.startDate,
                endDate: $scope.endDate
            };

            batchesFactory.putBatch($scope.batchId, batch);
            getBatches();
        };

        //delete Batch record
        $scope.deleteBatch = function (id) {
            batchesFactory.deleteBatch($scope.batchId)
                .then(function (d) {
                    $scope.batch = d.data;
                    getBatches();
                }, function (error) {
                  $scope.status = 'Unable to Delete Batch: ' + error.message;
               }
            );
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

        }

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
    })
    .controller('UsersController', function ($scope) {
        $scope.demo = "This is the Users View";

    })
    .controller('UsersTenantsController', function ($scope) {
        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
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

        }

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

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };

    })
    .controller('UsersRecruitersController', function ($scope) {

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('UsersProvidersController', function ($scope) {

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('UsersBatchesController', ["$scope", "batchesFactory", function ($scope, batchesFactory) {
        //batch 
        $scope.batchName;
        $scope.startDate;
        $scope.endDate;
        //contact
        $scope.contactList = [];
        $scope.contactfirstName;
        $scope.contactlastName;
        $scope.contactEmail;
        $scope.contactPhone;



        $scope.status;
        $scope.batches;
        $scope.contacts;
        //call batch services
        $scope.getBatches = function getBatches() {
            batchesFactory.getBatches()
                .then(function (response) {
                    $scope.batches = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Batches: ' + error.message;
                });
        }
        $scope.postBatch = function postBatch() {
            var batch = JSON.stringify({ startDate: $scope.startDate, endDate: $scope.endDate, name: $scope.batchName });
            console.log(batch);
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
        $scope.getContacts = function getContact() {
            contactFactory.getContacts(contact)
                .then(function (response) {
                    $scope.contacts = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Batches: ' + error.message;
                });
        }
        $scope.postContacts = function postContact() {
            $scope.updateContactList();
            var contact = JSON.stringify($scope.contactList);
            console.log(contact);
            contactFactory.postContacts(contact)
                .then(function (response) {
                    $scope.contacts = response.data;
                }, function (error) {
                    $scope.status = 'Unable to insert Batch: ' + error.message;
                });
            console.log($scope.batchName);
        }

        $scope.updateContactList = function updateContactList() {

            console.log($scope.contactfirstName);
            $scope.contactList.push({ firstName: $scope.contactfirstName, lastName: $scope.contactlastName, email: $scope.contactEmail, phoneNumber: $scope.contactPhone });
            console.log($scope.contactfirstName);
            $scope.contactfirstName = '';
            $scope.contactlastName = '';
            $scope.contactEmail = '';
            $scope.contactPhone = '';

        }
   
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




