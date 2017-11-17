'use strict';
angular.module('app')
    .factory('addressesSrvc', ['$http', '$scope', function ($http, $scope) {
        return {
            getAddresses: function () {
                return $http.get(server + '/api/Address/');
            },
            getAddress: function (id) {
                return $http({
                    method: 'GET',
                    url: server + '/someUrl',
                    //header: {authorization: "Bearer " + token  
                    //}

                })
            },
            postAddress: function (id) {
                return $http.post('/api/Address/', id);
            },
            putAddress: function (item) {
                return $http.put('/api/Address/', item);
            },
            deleteAddress: function (id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/Address/' + id
                });
            }
        };
    }]);