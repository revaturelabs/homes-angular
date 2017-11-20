angular.module('StartApp.managerApp')
    .factory('genderFactory', ['$http', function ($http) {

        //var urlBase = 'https://localhost:44364/api/genders';
        var urlBase = 'http://homes-webapi.azurewebsites.net/api/genders';
        var genderFactory = {};
        var item = "test1";
        genderFactory.getGenders = function () {
            return $http.get(urlBase);
        };
        genderFactory.postGenders = function () {
            var item = "test1";
            return $http.post(urlBase, item);
        }
        return genderFactory;

    }]);



/*'use strict';
angular.module('app')
    .factory('todoListSvc', ['$http', function ($http) {
        return {
            getItems: function () {
                return $http.get('/api/Genders');
            },
            getItem: function (id) {
                return $http.get('/api/Genders/' + id);
            },
            putItem: function (item) {
                return $http.put('/api/Genders/', item);
            },
            postItem: function (item) {
                return $http.post('/api/Genders/', item);
            },
            deleteItem: function (id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/Genders/' + id
                });
            }
        };
    }]);*/