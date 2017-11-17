'use strict';
angular.module('app')
.factory('contactFactory', ['$http', function ($http) {
    return {
        putContact : function(item){
            return $http.put('/api/Contacts/', item);
        },

        getItems: function () {
            return $http.get('/api/HousingUnits');
        },

        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/Contacts/' + id
            });
        }
    };
}]);