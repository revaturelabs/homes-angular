'use strict';
angular.module('StartApp.tenantApp')
    .controller("TenantsDashboardController", ['$http', '$scope', '$rootScope', 'tenantsFactory', 'supplyRequestsFactory', 'maintenanceRequestsFactory', 'contactFactory', function ($http, $scope, $rootScope, tenantsFactory, supplyRequestsFactory, maintenanceRequestsFactory,contactFactory) {
        //getTenants();
        //var x = 2;
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
        var x = sessionStorage.oid;
        console.log(x);
        
        console.log(x);
        $scope.getContactbyoid = function () {
            contactFactory.getContactbyoid (x)
                .then(function (response) {
                    $scope.contact = response.data;
                    //$scope.y = $scope.tenant.contactId;
                    //console.log($scope.y);
                    console.log($scope.contact);
                    getTenantInfo($scope.contact);
                }, function (error) {
                    $scope.status = 'Unable to load Tenants: ' + error.message;
                });

        };

         function getTenantInfo (y) {
            tenantsFactory.getTenantInfo(y)
                .then(function (response) {
                    $scope.tenant = response.data;
                    //$scope.y = $scope.tenant.contactId;
                    //console.log($scope.y);
                    console.log($scope.tenant.tenantId)
                    sessionStorage["tenantid"] = $scope.tenant.tenantId;
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
    .controller("TenantsMaintenanceController", ['$http', '$scope', '$rootScope', 'maintenanceRequestsFactory', 'contactFactory', function ($http, $scope, $rootScope, maintenanceRequestsFactory, contactFactory) {

        console.log(sessionStorage.tenantid);
        $scope.message;
        $scope.postMaintenanceRequest = function () {
            var request = JSON.stringify({ tenantId: sessionStorage.tenantid, active: true, message: $scope.message })
            console.log(request);
            maintenanceRequestsFactory.postMaintenanceRequest(request)
                .then(function (response) {
                    $scope.maintenance = response.data;
                    console.log($scope.maintenance);
                }, function (error) {
                    $scope.status = 'Unable to load Supplies requests: ' + error.message;
                });

        };
        
           
              
        
        

    }])
    .controller("TenantsSuppliesController", function ($http, $scope) {

    })
    .controller("TenantsProfileController", function ($http, $scope) {

    });
