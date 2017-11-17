'use strict';
angular.module('app')
    .factory('ProviderSvc', ['$http', function ($http) {
        return {
            getItems: function () {
                return $http.get('/api/Providers');
            },
            getItem: function (id) {
                return $http.get('/api/Providers/' + id);
            },
            getItem: function () {
                return $http.get('api/Providers/WithContact' );
            },
            getItem: function (id) {
                return $http.get('api/Providers/WithContact/' + id);
            },
            getItem: function () {
                return $http.get('api/Providers/WithUnits');
            },
            getItem: function (id) {
                return $http.get('api/Providers/WithUnits/'+ id);
            },
            putItem: function (item) {
                return $http.put('api/Providers/', item);
            },
            postAddress: function (id) {
                return $http.post('/api/Providers/', id);
            },
            deleteAddress: function (id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/Providers/' + id
                });
            }

        };
    }]);