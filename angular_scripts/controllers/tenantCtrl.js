'use strict';
angular.module('StartApp.tenantApp')
    .controller("TenantsDashboardController", function ($http, $scope,tenantsFactory) {
        $scope.demo = "Alexie";
        //getTenants();
        var x = 3;
        //function getTenants() {
        //    tenantsFactory.getTenants()
        //        .then(function (response) {
        //            console.log('im here');
        //            $scope.tenants = response.data;
        //        }, function (error) {
        //            $scope.status = 'Unable to load Tenants: ' + error.message;
        //        });

        //};
        getTenantInfo(x);
        function getTenantInfo(id) {
            tenantsFactory.getTenantInfo(id)
                .then(function (response) {
                    $scope.tenant = response.data;
                    console.log($scope.tenant);
                }, function (error) {
                    $scope.status = 'Unable to load Tenants: ' + error.message;
                });

        };

    })
    .controller("TenantsMaintenanceController", function ($http, $scope) {

    })
    .controller("TenantsSuppliesController", function ($http, $scope) {

    })
    .controller("TenantsProfileController", function ($http, $scope) {

    });
