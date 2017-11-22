//COMPLETED - Need to review.


//'use strict';
//angular.module('app')
//    .factory('suppliesRequestSrvc', ['$http', function ($http) {
//        return {
//            getItems: function () {
//                return $http.get('/api/SuppliesRequest');
//            },
//            getItems: function (id) {
//                return $http.get('/api/Supplies/' + id);
//            },
//            putItem: function (item) {
//                return $http.put('api/Supplies/', item);
//            },
//            postAddress: function (id) {
//                return $http.post('api/Supplies/', id);
//            },

//            deleteItem: function (id) {
//                return $http({
//                    method: 'DELETE',
//                    url: '/api/Supplies/' + id
//                });
//            }
//        };
//    }]);

angular.module('StartApp.managerApp')
    .factory('supplyRequestsSrvc', ['$http', function ($http) {

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