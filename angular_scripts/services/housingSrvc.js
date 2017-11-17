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
        getItem : function(id){
            return $http.get('/api/HousingOccupants/' + id);
        },
        postItem : function(item){
            return $http.post('/api/TodoList/',item);
        },
        putItem : function(item){
            return $http.put('/api/TodoList/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/TodoList/' + id
            });
        }
    };
}]);