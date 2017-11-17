'use strict';
angular.module('app')
.factory('todoListSvc', ['$http', function ($http) {
    return {
        getItems : function(){
            return $http.get('/api/HousingUnits');
        },
        getItem : function(id){
            return $http.get('/api/HousingUnits/' + id);
        },
        getItem: function (id) {
            return $http.get('/api/HousingUnits/WithProviders');
        },
        getItem: function (id) {
            return $http.get('/api/HousingUnits/WithAddresses/ByProvider' + id);
        },
        getItem : function(id){
            return $http.get('/api/HousingOccupants/' + id);
        },
    };
}]);