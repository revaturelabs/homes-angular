//COMPLETED - Need to review.


//'use strict';
//angular.module('StartApp.providerApp')
//    .controller("managerCtrl", function ($http, $scope) {


//    });

'use strict';
angular.module('StartApp.managerApp')
    .controller('ProvidersDashboardController', function ($scope, providerFactory) {

        $scope.status;
        $scope.addrress;
        $scope.postAddress;
        $scope.putAddress;
        $scope.deleteAddress;

        getManagers();

        function getAddresses() {
            providerFactory.getAddresses()
                .then(function (response) {
                    $scope.addrress = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Addresses: ' + error.message;
                });

        };

        $scope.getAddressById = function getManagersById(id) {
            providerFactory.getManagersById(id)
                .then(function (response) {
                    $scope.addressById = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Address by Id: ' + error.message;
                });

        };

        $scope.postAddress = function postAddress(address) {
            providerFactory.postAddress(address)
                .then(function (response) {
                    $scope.address = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Post Address: ' + error.message;
                });
        };

        $scope.putManager = function putManager(address) {
            providerFactory.putManager(address)
                .then(function (response) {
                    $scope.address = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Put Address: ' + error.message;
                });
        };

        $scope.deleteManager = function deleteManager(id) {
            providerFactory.deleteManager(id)
                .then(function (response) {
                    $scope.address = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Delete Address: ' + error.message;
                });
        };

    })

    .controller('ProvidersHousingController', function ($scope) {

    });