
//COMPLETED - NEED REVIEW
angular.module('StartApp.managerApp')
    .factory('suppliesFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Supplies';

        var suppliesFactory = {};

        suppliesFactory.getSupplies = function () {
            //console.log('Bearer ' + sessionStorage['adal.access.token.key' + cid]);
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };

        suppliesFactory.getSupplyById = function (id) {

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
     
        suppliesFactory.postSupply = function (supplyName) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { "supplyName": supplyName },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });
        };

        suppliesFactory.putSupply = function (supply) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + "/" + supply.supplyId,
                data: supply ,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]}
            }).then(function (response) {
                return response;
            });
        };

        suppliesFactory.deleteSupply = function (id) {
            $http({
                method: 'DELETE',
                dataType: 'json',
                url: urlBase + "/" + id,         
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]}
            }).then(function (response) {
                return response;
            });
        };

        return suppliesFactory;

    }]);