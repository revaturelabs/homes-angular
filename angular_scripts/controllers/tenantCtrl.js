'use strict';
angular.module('StartApp.tenantApp')
    .controller("TenantsDashboardController", ['$http', '$scope', '$rootScope', 'tenantsFactory', 'supplyRequestsFactory', 'maintenanceRequestsFactory', function ($http, $scope, $rootScope, tenantsFactory, supplyRequestsFactory, maintenanceRequestsFactory) {
        //getTenants();
        var x = 3;
        //var y = 2;
        //function getTenants() {
        //    tenantsFactory.getTenants()
        //        .then(function (response) {
        //            console.log('im here');
        //            $scope.tenants = response.data;
        //        }, function (error) {
        //            $scope.status = 'Unable to load Tenants: ' + error.message;
        //        });

        //};
        $scope.tenant;
        //getTenantInfo(x);
        

        $scope.getTenantInfo = function() {
            tenantsFactory.getTenantInfo(x)
                .then(function (response) {
                    $scope.tenant = response.data;
                    //$scope.y = $scope.tenant.contactId;
                    //console.log($scope.y);
                    console.log($scope.tenant.contactId);
                    getSupplyRequestWithSuppliesByTenant($scope.tenant.contactId);
                    getMaintenanceRequestByTenant($scope.tenant.contactId);
                }, function (error) {
                    $scope.status = 'Unable to load Tenants: ' + error.message;
                });
          
        };
        
    
        //getSupplyRequestWithSuppliesByTenant(y);

        function getSupplyRequestWithSuppliesByTenant(y) {
            supplyRequestsFactory.getSupplyRequestWithSuppliesByTenant(y)
                .then(function (response) {
                    $scope.supply = response.data;
                    console.log($scope.supply);
                }, function (error) {
                    $scope.status = 'Unable to load Supplies requests: ' + error.message;
                });

        };  

        function getMaintenanceRequestByTenant(y) {
            maintenanceRequestsFactory.getMaintenanceRequestByTenant(y)
                .then(function (response) {
                    $scope.maintenance = response.data;
                    console.log($scope.maintenance);
                }, function (error) {
                    $scope.status = 'Unable to load Supplies requests: ' + error.message;
                });

        }; 


    }])
    .controller("TenantsMaintenanceController", function ($http, $scope) {

    })
    .controller("TenantsSuppliesController", function ($http, $scope) {

    })
    .controller("TenantsProfileController", function ($http, $scope) {

    });
