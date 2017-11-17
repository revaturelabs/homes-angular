'use strict';
angular.module('app')
    .factory('todoListSvc', <'$http', function ($http) {
        return {
            getItems: function () {
                return $http.get('/api/Batches');
            },
            getItem: function (id) {
                return $http.get('/api/Batches/' + id);
            },
            putItem: function (item) {
                return $http.put('/api/Batches/', item);
            },
            postItem: function (item) {
                return $http.post('/api/Batches/', item);
            },
            deleteItem: function (id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/Batches/' + id
                });
            }
        };
    }]);