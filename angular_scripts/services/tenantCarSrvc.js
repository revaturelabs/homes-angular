//COMPLETED - Need Review

angular.module('StartApp.managerApp')
    .factory('tenantFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.netapi/api/TenantCarRelationships';
        var tenantFactory = {};

        //tenantFactory.getSupplies = function () {
        //    return $http.get(urlBase);
        //};


        tenantFactory.getTenantCarById = function (id) {
            return $http.get(urlBase + id);
        };


        tenantFactory.postTenantCar = function (tenantCar) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { tenantCar },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };


        tenantFactory.putTenantCar = function (tenantCar) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + tenantCar.tenantId,
                data: { tenantCar },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };

        tenantFactory.deleteTenantCar = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        return tenantFactory;

    }]);