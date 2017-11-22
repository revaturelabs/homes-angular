//COMPLETED - Need to review.


//'use strict';
//angular.module('StartApp.providerApp')
//    .controller("managerCtrl", function ($http, $scope) {


//    });

'use strict';
angular.module('StartApp.providerApp')
    .controller('ProvidersDashboardController', ['$scope', 'maintenanceRequestsSrvc', function ($scope, maintenaceRequestsSrvc) {

        $scope.status;
        $scope.addrress;
        $scope.postAddress;
        $scope.putAddress;
        $scope.deleteAddress;

        $scope.maintenaceRequests;

        $scope.populate = function () {
            maintenaceRequestsSrvc.getMaintenanceRequestByProvider(3)
                .then(function (response) {
                    $scope.maintenaceRequests = response.data;
                    console.log(response.data);
                }, function (error) {
                    $scope.status = 'Unable to load Addresses: ' + error.message;
                });
            $scope.sort = function (keyname) {
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            };
        };


        //getAddresses();

        //function getAddresses() {
        //    providerFactory.getAddresses()
        //        .then(function (response) {
        //            $scope.addrress = response.data;
        //            console.log(response.data);
        //        }, function (error) {
        //            $scope.status = 'Unable to load Addresses: ' + error.message;
        //        });

        //};

    //    $scope.getAddressById = function getManagersById(id) {
    //        providerFactory.getManagersById(id)
    //            .then(function (response) {
    //                $scope.addressById = response.data;
    //            }, function (error) {
    //                $scope.status = 'Unable to load Address by Id: ' + error.message;
    //            });

    //    };

    //    $scope.postAddress = function postAddress(address) {
    //        providerFactory.postAddress(address)
    //            .then(function (response) {
    //                $scope.address = response.data;
    //            }, function (error) {
    //                $scope.status = 'Unable to Post Address: ' + error.message;
    //            });
    //    };

    //    $scope.putManager = function putManager(address) {
    //        providerFactory.putManager(address)
    //            .then(function (response) {
    //                $scope.address = response.data;
    //            }, function (error) {
    //                $scope.status = 'Unable to Put Address: ' + error.message;
    //            });
    //    };

    //    $scope.deleteManager = function deleteManager(id) {
    //        providerFactory.deleteManager(id)
    //            .then(function (response) {
    //                $scope.address = response.data;
    //            }, function (error) {
    //                $scope.status = 'Unable to Delete Address: ' + error.message;
    //            });
    //    };

    }])

    .controller('ProvidersHousingController', function ($scope) {

    });