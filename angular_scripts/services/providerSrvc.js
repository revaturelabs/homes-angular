//Completed - Untested
angular.module('StartApp.managerApp')
    .factory('providerFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Providers';
        var providerFactory = {};

        providerFactory.getProvider = function (id) {
            return $http.get(urlBase + "/" + id)
        };
        providerFactory.getProviders = function () {
            return $http.get(urlBase);
        };
        providerFactory.getProviderWithContact = function (id) {
            return $http.get(urlBase + "/WithContact/" + id)
        };
        providerFactory.getProvidersWithContacts = function () {
            return $http.get(urlBase + "/WithContact");
        };
        providerFactory.getProviderWithUnits = function (id) {
            return $http.get(urlBase + "/WithUnits/" + id);
        };
        providerFactory.getProvidersWithUnits = function () {
            return $http.get(urlBase + "/WithUnits");
        };

        providerFactory.postProvider = function (item) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { item },
                headers: { "Content-Type": "application/json" }
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
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };
        providerFactory.deleteProviders = function (id) {
            return $http.delete(urlBase + '/' + id);
        }
            return providerFactory;

        }
    ]);

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