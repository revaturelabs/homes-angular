'use strict';
angular.module('addresses')
    .factory('addressesSrvc', ['$http', '$scope', function ($http, $scope) {
        return {
            getAddresses: function () {
                return $http.get(server + '/api/Address/');
            },
            getAddress: function (id) {
                return $http({
                    method: 'GET',
                    url: server + '/someUrl',
                    header: {authorization: "Bearer " + token  }

                })
            }
        };
    }]);