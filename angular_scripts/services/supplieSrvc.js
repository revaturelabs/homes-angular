'use strict';
angular.module('app')
.factory('suppliesFactory', ['$http', function ($http) {
    return {
        getItems : function(){
            return $http.get('/api/SupplyRequest');
        },
        postItem : function(item){
            return $http.post('/api/SupplieRequest/',item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/TodoList/' + id
            });
        }
    };
}]);