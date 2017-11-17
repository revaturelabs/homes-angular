'use strict';
angular.module('app')
.factory('maintainanceSrvc', ['$http', function ($http) {
    return {
        getMaintainance : function(){
            return $http.get('/api/MaintainenceRequests');
        },

        getMaintainance: function (id) {
            return $http.get('/api/MaintainenceRequests' + id);
        },

        postMaintainance : function(item){
            return $http.post('/api/MaintainenceRequests/', item);
        },

        putMaintainance: function (item) {
            return $http.put('/api/MaintainenceRequests/', item);
        },

        deleteMaintainance : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/MaintainenceRequests/' + id
            });
        }
    };
}]);