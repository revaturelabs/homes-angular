angular.module('StartApp.managerApp')
    .factory('batchesFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/batches';
        var batchesFactory = {};

        batchesFactory.getBatches = function () {
            return $http.get(urlBase);
        };
        batchesFactory.postBatch = function (batch) {
            alert("batch added");
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

        return batchesFactory;
    }]);