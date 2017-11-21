
//COMPLETED - NEED REVIEW
angular.module('StartApp.managerApp')
    .factory('suppliesFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Supplies';

        var suppliesFactory = {};

        suppliesFactory.getSupplies = function () {
            return $http.get(urlBase);
        };

        suppliesFactory.getSupply = function (id) {
            return $http.get(urlBase + "/" + id);
        };

        suppliesFactory.postSupply = function (supply) {
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

        suppliesFactory.putSupply = function (supply) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + "/" + supply.supplyId,
                data: { tenant },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };

        suppliesFactory.deleteSupply = function (id) {
            return $http.delete(urlBase + "/" + id)
        };

        return suppliesFactory;

    }]);