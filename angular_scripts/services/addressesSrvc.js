angular.module('StartApp.managerApp')
    .factory('addressesFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Addresses';
        var addressesFactory = {};

        addressesFactory.getAddresses = function () {
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


        addressesFactory.getAddressById = function (id) {
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


        addressesFactory.postAddress = function (address) {
           return $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { address },
                headers: {
                    "Content-Type": "application/json",
                "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            })
        };


        addressesFactory.putAddress = function (address) {
            return $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + address.addressId,
                data: { address },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            })
        };

        addressesFactory.deleteAddress = function (id) {
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

        return addressesFactory;

    }]);