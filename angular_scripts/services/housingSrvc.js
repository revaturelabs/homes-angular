'use strict';
angular.module('app')
.factory('todoListSvc', ['$http', function ($http) {
    return {
        getItems : function(){
            return $http.get('/api/HousingUnits');
        },
        //getItem : function(id){
        //    return $http.get('/api/HousingUnits/' + id);
        //},
        //getItem: function () {
        //    return $http.get('/api/HousingUnits/WithProviders');
        //},
        //getItem: function (id) {
        //    return $http.get('/api/HousingUnits/WithProviders/' + id);
        //},
        //getItem: function (id) {
        //    return $http.get('/api/HousingUnits/WithAddresses/ByProvider' + id);
        //},
        //getItem: function () {
        //    return $http.get('/api/HousingUnits/WithAddresses');
        //},
        //getItem: function (id) {
        //    return $http.get('/api/HousingUnits/WithAddresses/' + id);
        //},
        //getItem : function(id){
        //    return $http.get('/api/HousingOccupants/' + id);
        //},
        putItem: function (item) {
            return $http.put('/api/HousingUnits/', item);
        },
        postItem: function (item) {
            return $http.post('/api/HousingUnits/', item);
        },
        deleteItem: function (id) {
            return $http({
                method: 'DELETE',
                url: '/api/HousingUnits/' + id
            });
        }
    };
}]);