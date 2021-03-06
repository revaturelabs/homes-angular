﻿angular.module('StartApp.managerApp')
    .factory('genderFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/genders';
        var genderFactory = {};

        genderFactory.getGenders = function() {
           return  $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
            
        };
        //genderFactory.postGender = function (gender) {
        //    $http({
        //        method: 'POST',
        //        dataType: 'json',
        //        url: urlBase,
        //        data: { "genderOption": gender },
        //        headers: { "Content-Type": "application/json" }
        //    }).then(function (response) {
        //        return response;
        //    });
        //};

        //genderFactory.getGender = function () {
        //    $http({
        //        method: 'GET',
        //        dataType: 'json',
        //        url: urlBase + "/1"

        //    }).then(function (response) {
        //        return response;
        //    });
        //};

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