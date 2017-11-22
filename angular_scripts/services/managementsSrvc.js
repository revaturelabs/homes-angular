//COMPLETED - Need to review.

angular.module('StartApp.managerApp')
    .factory('managementsFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Managements';
        var managementsFactory = {};

        managementsFactory.getManagers = function () {
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


        managementsFactory.getManagersById = function (id) {
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


        managementsFactory.postManager = function (manager) {
            return $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { manager },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            })
        };


        managementsFactory.putManager = function (manager) {
            return $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + manager.managerId,
                data: { manager },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            })
        };

        managementsFactory.deleteManager = function (id) {
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

        return managementsFactory;

    }]);