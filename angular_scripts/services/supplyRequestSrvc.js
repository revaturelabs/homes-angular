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
    .factory('tenantFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.netapi/SupplyRequests';
        var tenantFactory = {};

        tenantFactory.getSupplies = function () {
            return $http.get(urlBase + '/WithSupplies');
        };


        tenantFactory.getSupplyById = function (id) {
            return $http.get(urlBase + '/WithSupplies/' + id);
        };


        tenantFactory.postSupply = function (supply) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { supply },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };


        tenantFactory.putSupply = function (supply) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + supply.supplyRequestId,
                data: { supply },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };

        tenantFactory.deleteSupply = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        return tenantFactory;

    }]);