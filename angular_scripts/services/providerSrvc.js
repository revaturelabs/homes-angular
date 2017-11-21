//Completed - Untested
angular.module('StartApp.managerApp')
    .factory('providerFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Providers';
        var providerFactory = {};

        providerFactory.getProvider = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        providerFactory.getProviders = function () {
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
        providerFactory.getProviderWithContact = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithContact/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };
        providerFactory.getProvidersWithContacts = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithContact",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };
        providerFactory.getProviderWithUnits = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithUnits/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };
        providerFactory.getProvidersWithUnits = function () {
            //return $http.get(urlBase + "/WithUnits");
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/WithUnits",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        };

        providerFactory.postProvider = function (item) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { item },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });
        };
        providerFactory.putProvider = function (id, item) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + '/' + item.providerId,
                data: { item },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });
        };
        providerFactory.deleteProviders = function (id) {
            //return $http.delete(urlBase + '/' + id);
            return $http({
                method: 'DELETE',
                dataType: 'json',
                url: urlBase + "/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
        }
            return providerFactory;

        
    }]);

//'use strict';
//angular.module('app')
//    .factory('ProviderSvc', ['$http', function ($http) {
//        return {
//            getItems: function () {
//                return $http.get('/api/Providers');
//            },
//            getItem: function (id) {
//                return $http.get('/api/Providers/' + id);
//            },
//            getItem: function () {
//                return $http.get('api/Providers/WithContact' );
//            },
//            getItem: function (id) {
//                return $http.get('api/Providers/WithContact/' + id);
//            },
//            getItem: function () {
//                return $http.get('api/Providers/WithUnits');
//            },
//            getItem: function (id) {
//                return $http.get('api/Providers/WithUnits/'+ id);
//            },
//            putItem: function (item) {
//                return $http.put('api/Providers/', item);
//            },
//            postAddress: function (id) {
//                return $http.post('/api/Providers/', id);
//            },
//            deleteAddress: function (id) {
//                return $http({
//                    method: 'DELETE',
//                    url: '/api/Providers/' + id
//                });
//            }

//        };
//   }]);