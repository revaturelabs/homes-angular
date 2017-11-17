'use strict';
angular.module('app')
    .factory('suppliesRequestSrvc', <'$http', function ($http) {
        return {
            getItems: function () {
                return $http.get('/api/SuppliesRequest');
            },
            getItems: function (id) {
                return $http.get('/api/Supplies/' + id);
            },
            putItem: function (item) {
                return $http.put('api/Supplies/', item);
            },
            postAddress: function (id) {
                return $http.post('api/Supplies/', id);
            },

            deleteItem: function (id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/Supplies/' + id
                });
            }
        };
    }]);
