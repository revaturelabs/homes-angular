'use strict';
angular.module('app')
    .factory('todoListSvc', ['$http', function ($http) {
        return {
            getTenants: function () {
                return $http.get('/api/Tenants/');
            },
            getTenantsById: function (id) {
                return $http.get('/api/Tenants/' + id);
            },
            postTenants: function (item) {
                return $http.post('/api/Tenants/', item);
            },
            putTenant: function (item) {
                return $http.put('/api/Tenants/', item);
            },
            deleteTenant: function (id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/Tenants/' + id
                });
            }
        };
    }]);