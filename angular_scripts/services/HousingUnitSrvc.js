angular.module('StartApp.managerApp')
    .factory('housingUnitFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api/HousingUnits';
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
        housingUnitFactory.postHousingUnit = function (item) {
            return $http.post(urlBase, item);
        };
        return housingUnitFactory;

    }]);