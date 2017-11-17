'use strict';
angular.module('app')
.factory('contactFactory', ['$http', function ($http) {
    return {
        putItem : function(item){
            return $http.put('/api/Contacts/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/TodoList/' + id
            });
        }
    };
}]);