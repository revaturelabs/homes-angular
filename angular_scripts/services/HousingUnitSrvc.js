//Completed - Untested 
angular.module('StartApp.managerApp')
    .factory('housingUnitFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/HousingUnits';
        var housingUnitFactory = {};
        housingUnitFactory.getHousingUnits = function () {
            return $http.get(urlBase);
        };
        housingUnitFactory.getHousingUnitsWithAddresses = function () {
            return $http.get(urlBase + "/WithAddresses");
        };
        housingUnitFactory.getHousingUnitWithAddresses = function (id) {
            return $http.get(urlBase + "/WithAddresses/" + id)
        };
        housingUnitFactory.getHousingUnitsWithProviders = function () {
            return $http.get(urlBase + "/WithProviders");
        };
        housingUnitFactory.getHousingUnitWithProviders = function (id) {
            return $http.get(urlBase + "/WithProviders/" + id);
        };
        housingUnitFactory.getHousingUnitsWithTenants = function () {
            return $http.get(urlBase + "/WithTenants");
        };
        housingUnitFactory.getHousingUnitWithTenants = function (id) {
            return $http.get(urlBase + "/WithTenants/" + id);
        };
        housingUnitFactory.postHousingUnit = function (item){
           $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: {item},
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };
        housingUnitFactory.putHousingUnit = function (id, item) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + item.housingUnitId,
                data: {item},
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };       
        housingUnitFactory.deleteHousingUnits = function (id) {
            return $http.delete(urlBase + '/' + id);  

        return housingUnitFactory;

    }]);