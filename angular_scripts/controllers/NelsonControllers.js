//COMPLETED - Need Review

//Tenant Car
'use strict';
angular.module('StartApp.managerApp')
    .controller("tenantCtrl", function ($http, $scope) {

    })

    .controller('DashManagersController', function ($scope, tenantFactory) {

        $scope.status;
        $scope.tenantCar;
        $scope.postAddress;
        $scope.putAddress;
        $scope.deleteAddress;

        //getTenantCar();

        //function getTenantCar() {
        //    tenantFactory.getTenantCar()
        //        .then(function (response) {
        //            $scope.tenantCar = response.data;
        //        }, function (error) {
        //            $scope.status = 'Unable to load TenantCar: ' + error.message;
        //        });

        //};

        $scope.getTenantCarById = function getTenantCarById(id) {
            tenantFactory.getTenantCarById(id)
                .then(function (response) {
                    $scope.tenantCarById = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load TenantCar by Id: ' + error.message;
                });

        };

        $scope.postTenantCar = function postTenantCar(tenantCar) {
            tenantFactory.postTenantCar(tenantCar)
                .then(function (response) {
                    $scope.tenantCar = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Post TenantCar: ' + error.message;
                });
        };

        $scope.putTenantCar = function putTenantCar(tenantCar) {
            tenantFactory.putTenantCar(tenantCar)
                .then(function (response) {
                    $scope.tenantCar = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Put TenantCar: ' + error.message;
                });
        };

        $scope.deleteTenantCar = function deleteTenantCar(id) {
            tenantFactory.deleteTenantCar(id)
                .then(function (response) {
                    $scope.tenantCar = response.data;
                }, function (error) {
                    $scope.status = 'Unable to Delete TenantCar: ' + error.message;
                });
        };

    });
