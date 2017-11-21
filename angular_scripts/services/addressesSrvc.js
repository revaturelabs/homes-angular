﻿//COMPLETED - Need to review.


//'use strict';
//angular.module('app')
//    .factory('addressesSrvc', ['$http', '$scope', function ($http, $scope) {
//        return {
//            getAddresses: function () {
//                return $http.get(server + '/api/Address/');
//            },
//            getAddress: function (id) {
//                return $http({
//                    method: 'GET',
//                    url: server + '/someUrl'
//                    //header: {authorization: "Bearer " + token  
//                    //}

//                });
//            },
//            postAddress: function (item) {
//                return $http.post('/api/Address/', item);
//            },
//            putAddress: function (item) {
//                return $http.put('/api/Address/', item);
//            },
//            deleteAddress: function (id) {
//                return $http({
//                    method: 'DELETE',
//                    url: '/api/Address/' + id
//                });
//            }
//        };
//    }]);

angular.module('StartApp.managerApp')
    .factory('providerFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Addresses';
        var providerFactory = {};

        providerFactory.getAddresses = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };


        providerFactory.getAddressById = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + '/' + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };


        providerFactory.postAddress = function (address) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { address },
                headers: {
                    "Content-Type": "application/json",
                "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });
        };


        providerFactory.putAddress = function (address) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + address.addressId,
                data: { address },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });
        };

        providerFactory.deleteAddress = function (id) {
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

        return providerFactory;

    }]);