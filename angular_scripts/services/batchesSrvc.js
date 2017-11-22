angular.module('StartApp.managerApp')
    .factory('batchesFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/batches';

        var batchesFactory = {};

        batchesFactory.getBatches = function () {

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

        batchesFactory.getBatchById = function (id) {
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

        batchesFactory.postBatch = function (batch) {
            return $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: batch,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]}
            })
        };

        batchesFactory.putBatch = function(batchId, batch) {
            return $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + batchId,
                data: batch,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            })
        };

        batchesFactory.deleteBatch = function (id) {
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

        return batchesFactory;
    }]);