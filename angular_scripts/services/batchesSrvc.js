angular.module('StartApp.managerApp')
    .factory('batchesFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/batches';

        var batchesFactory = {};

        batchesFactory.getBatches = function () {
            return $http.get(urlBase);
        };

        batchesFactory.getBatchById = function (id) {
            return $http.get(urlBase + '/' +id);
        };

        batchesFactory.postBatch = function (batch) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: batch,
                headers: { "Content-Type": "application/json"}
            }).then(function (response) {
                return response;
            });
        };

        batchesFactory.putBatch = function(batchId, batch) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + batchId,
                data: batch,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });
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