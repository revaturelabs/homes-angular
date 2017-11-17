'use strict';
angular.module('app')
.factory('maintainanceFactory', ['$http', function ($http) {
    return {
        getItems : function(){
            return $http.get('/api/MaintainenceRequests');
        },
        postItem : function(item){
            return $http.post('/api/MaintainenceRequests/',item);
        },
       
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/TodoList/' + id
            });
        }
    };
}]);