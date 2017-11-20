//COMPLETED - Need to review.

angular.module('StartApp.managerApp')
    .factory('managementsFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Managements';
        var managementsFactory = {};

        managementsFactory.getManagers = function () {
            return $http.get(urlBase + '/WithContact');
        };


        managementsFactory.getManagersById = function (id) {
            return $http.get(urlBase + '/WithContact/' + id);
        };


        managementsFactory.postManager = function (manager) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { manager },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };


        managementsFactory.putManager = function (manager) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + manager.managerId,
                data: { manager },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };

        managementsFactory.deleteManager = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        return managementsFactory;

    }]);