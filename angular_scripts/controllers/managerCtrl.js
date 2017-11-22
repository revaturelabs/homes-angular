//COMPLETED - Need to review.

'use strict';
angular.module('StartApp.managerApp')

    .config(['growlProvider', function (growlProvider) {
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalPosition('bottom-right');
    }])

    .controller("DashboardController", function ($http, $scope, growl) {


    })
    .controller('DashSuppliesController', function ($scope, growl) {


        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('DashMaintenanceController', ['maintenanceRequestsSrvc', '$scope', function (maintenanceRequestsSrvc, $scope, growl) {
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
    .controller('DashHousingController', function ($scope, housingUnitFactory, growl) {
        getHousingsAndProviders();

        function getHousingsAndProviders() {
            housingUnitFactory.getHousingUnitsWithProviders()
                .then(function (response) {
                    $scope.housingsProviders = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load housings with providers: ' + error.message;
                });

        }

        $scope.getHousingProviderById = function (housing) {
            //Need to implement method that receive address id and return list of everything that have same address id
            var singlerecord = housingUnitFactory.getHousingUnitWithProviders(housing.addressId);
            singlerecord.then(function (d) {
               //Need to know how to iterate through list of objects that have same addressId
                var record = d.data;
                $scope.addressId = record.addressId;
                $scope.name = record.name;
                $scope.streetName = record.streetName;
                $scope.city = record.city;
                $scope.zipcode = record.zipcode;
                $scope.state = record.state;
                $scope.country = record.country;
                $scope.firstName = record.firstName;
                $scope.lastName = record.lastName;
                $scope.email = record.email;
                $scope.phoneNumber = record.phoneNumber;
                $scope.companyName = record.companyName;
            },
                function () {
                    $scope.status = 'Unable to get Batch: ' + error.message;
                });
        };



        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('DashBatchesController', function ($scope, batchesFactory, growl) {

        getBatches();

        function getBatches() {
            batchesFactory.getBatches().then(function (d) {//success
                $scope.batches = d.data;
            },
                function () {
                    growl.error('Unable to upload Supplies. Please refresh your browser or close it.', { title: 'Error!' });
                });
        }

        $scope.postBatch = function postBatch() {
            var batch = JSON.stringify({ startDate: $scope.startDate, endDate: $scope.endDate, name: $scope.name });
            batchesFactory.postBatch(batch).then(function (d) {
                $scope.batch = d.data;
                getBatches();

                $scope.name = '';
                $scope.startDate = '';
                $scope.endDate = '';

                growl.success("Batch " + $scope.name + " Added Successfully!", { title: 'Success!' });
            }, function (error) {
                growl.error("An error has ocurred while adding this batch.", { title: 'Error!' });
            }
            );
           

        };

        $scope.getBatchById = function (batch) {

            var singlerecord = batchesFactory.getBatchById(batch.batchId);
            singlerecord.then(function (d) {

                var record = d.data;
                $scope.batchId = record.batchId;
                $scope.batchName = record.name;
                $scope.startDate = record.startDate;
                $scope.endDate = record.endDate;
            },
                function () {
                    growl.error("An error has ocurred while deleting this batch.", { title: 'Error!' });
                });
        };

        $scope.updateBatch = function () {
            var batch = {
                batchId: $scope.batchId,
                name: $scope.batchName,
                startDate: $scope.startDate,
                endDate: $scope.endDate
            };

            batchesFactory.putBatch($scope.batchId, batch).then(function (d) {
                $scope.batch = d.data;
                getBatches();
                growl.success("Batch " + $scope.batchName + " Updated Successfully!", { title: 'Success!' });  
            }, function (error) {
                growl.error("An error has ocurred while updating this batch.", { title: 'Error!' });
            });
            
        };

        //delete Batch record
        $scope.deleteBatch = function (id) {
            batchesFactory.deleteBatch($scope.batchId)
                .then(function (d) {
                    $scope.batch = d.data;
                    getBatches();
                    growl.success("Batch " +$scope.batchName+" Deleted Successfully!", { title: 'Success!' });
                }, function (error) {
                    growl.error("An error has ocurred while deleting this batch.", { title: 'Error!' });
                }
                );
        };
        //sort Batch table
        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('SuppliesController', function ($scope, suppliesFactory, growl) {


        getSupplies();

        function getSupplies() {
            suppliesFactory.getSupplies()
                .then(function (response) {
                    $scope.supplies = response.data;
                }, function (error) {
                    growl.error("Unable to upload Supplies. Please refresh your browser or close it.", { title: 'Error!' });
                });

        }

        $scope.getSupplyById = function (supply) {

            suppliesFactory.getSupplyById(supply.supplyId)
            .then(function (d) {
                var record = d.data;
                $scope.supplyId = record.supplyId;
                $scope.supplyName = record.supplyName;
            },
                function () {
                    growl.error("Unable to upload Supplies. Please refresh your browser or close it.", { title: 'Error!' });
                });
        };

        $scope.postSupply = function () {
            var supply = $scope.newSupplyName;
            suppliesFactory.postSupply(supply).then(function (d) {
                var record = d.data;
                growl.success($scope.newSupplyName + " Added Successfully!", { title: 'Success!' });
                getSupplies();

            },
                function () {
                    growl.error("Unable to upload Supplies. Please refresh your browser or close it.", { title: 'Error!' });
                });
        };

        //update Supply Record
        $scope.updateSupply = function () {
            var supply = {
                supplyId: $scope.supplyId,
                supplyName: $scope.supplyName
            };

            suppliesFactory.putSupply($scope.supplyId, supply);
            growl.success("Supply Updated Successfully!", { title: 'Success!' });
            getSupplies();
        };

        //delete Supply record
        $scope.deleteSupply = function (id) {
            suppliesFactory.deleteSupply($scope.supplyId)
                .then(function (d) {
                    growl.success("Supply Deleted Successfully!", { title: 'Success!' });
                    getSupplies();
                }, function (error) {
                    growl.error("An error has ocurred while deleting this supply.", { title: 'Error!' });
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
    .controller('UsersManagersController', function ($scope, managementsFactory, growl) {

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
    .controller('UsersRecruitersController', function ($scope, growl) {

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('UsersProvidersController', function ($scope, growl) {

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
    })
    .controller('UsersBatchesController', ["$scope", "batchesFactory", function ($scope, batchesFactory, growl) {
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
        };

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
        };
        //call contact services
        $scope.getContacts = function getContact() {
            contactFactory.getContacts(contact)
                .then(function (response) {
                    $scope.contacts = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Batches: ' + error.message;
                });
        };

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
        };

        $scope.updateContactList = function updateContactList() {

            console.log($scope.contactfirstName);
            $scope.contactList.push({ firstName: $scope.contactfirstName, lastName: $scope.contactlastName, email: $scope.contactEmail, phoneNumber: $scope.contactPhone });
            console.log($scope.contactfirstName);
            $scope.contactfirstName = '';
            $scope.contactlastName = '';
            $scope.contactEmail = '';
            $scope.contactPhone = '';

        };

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




