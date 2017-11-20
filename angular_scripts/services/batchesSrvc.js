angular.module('StartApp.managerApp')
    .factory('batchesFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api';
        var batchesFactory = {};

        batchesFactory.getBatches = function () {
            return $http.get(urlBase + '/Batches');
        };

        return batchesFactory;
    }]);