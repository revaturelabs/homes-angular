'use strict';
angular.module('app')
.factory('contactSrvc', ['$http', function ($http) {
    return {
        putContact : function(item){
            return $http.put('/api/Contacts/', item);
        },

        getItem: function (id) {
            return $http.get('/api/Contacts/' + id);
        },

        getContacts: function () {
            return $http.get('/api/Contacts/');
        },

        postContact: function (item) {
            return $http.post('/api/Contacts/', item);
        },

        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/Contacts/' + id
            });
        }
    };
}]);