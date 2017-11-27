//Completed - Untested 
angular.module('StartApp.managerApp')
    .factory('housingUnitFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/HousingUnits';
        var housingUnitFactory = {};
        housingUnitFactory.getHousingUnits = function () {
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
        housingUnitFactory.getHousingUnitsWithAddresses = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithAddresses",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        housingUnitFactory.getHousingUnitWithAddresses = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithAddresses/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        housingUnitFactory.getHousingUnitsWithProviders = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithProviders",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        housingUnitFactory.getHousingUnitWithProviders = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithProviders/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        housingUnitFactory.getHousingUnitsWithTenants = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithTenants",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        housingUnitFactory.getHousingUnitWithTenants = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithTenants/"+ id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };
        housingUnitFactory.getHousingUnitWithAddressByProvider = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithAddresses/ByProvider/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };
        housingUnitFactory.postHousingUnit = function (item){
            return $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: item ,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };
        housingUnitFactory.putHousingUnit = function (id, item) {
            return $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + item.housingUnitId,
                data: item ,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };       
        housingUnitFactory.deleteHousingUnits = function (id) {
            //return $http.delete(urlBase + '/' + id);
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
        return housingUnitFactory;

    }]);