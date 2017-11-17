'use strict';
angular.module('app')
.factory('maintainanceFactory', ['$http', function ($http) {
    return {
        getMaintainance : function(){
            return $http.get('/api/MaintainenceRequests');
        },

        getMaintainance: function (id) {
            return $http.get('/api/MaintainenceRequests' + id);
        },

        postMaintainance : function(id){
            return $http.post('/api/MaintainenceRequests/', id);
        },

        putMaintainance: function (id) {
            return $http.put('/api/MaintainenceRequests/', id);
        },

        deleteMaintainance : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/MaintainenceRequests/' + id
            });
        }
    };
}]);