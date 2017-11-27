//COMPLETED

angular.module('StartApp.managerApp')
    .factory('supplyRequestsFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/SupplyRequests';
        var supplyRequestsFactory = {};

        supplyRequestsFactory.getSupplyRequests = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + '/All',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        supplyRequestsFactory.getSupplyRequestWithSuppliesByTenant = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/ByTenant/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        supplyRequestsFactory.getSuppliesByHousingUnit = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + '/ByHouseUnit/',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };


        supplyRequestsFactory.getSupplyById = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + '/' + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };


        supplyRequestsFactory.postSupply = function (supply) {
            return $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { supply },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            })
        };


        supplyRequestsFactory.putSupply = function (supply) {
            return $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + supply.supplyRequestId,
                data: { supply },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            })
        };

        supplyRequestsFactory.deleteSupply = function (id) {
            return $http({
                method: 'DELETE',
                dataType: 'json',
                url: urlBase + '/' + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };

        return supplyRequestsFactory;

    }]);