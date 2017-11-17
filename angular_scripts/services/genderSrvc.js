'use strict';
angular.module('app')
    .factory('todoListSvc', ['$http', function ($http) {
        return {
            getItems: function () {
                return $http.get('/api/Gender');
            },
            getItem: function (id) {
                return $http.get('/api/Gender/' + id);
            },
        };
    }]);