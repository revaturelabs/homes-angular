//COMPLETED - NEED A REVIEW

angular.module('StartApp.managerApp')
    .factory('maintainanceFactory', ['$http', function ($http) {

     var urlBase = 'https://homes-webapi.azurewebsites.net/api/MaintenanceRequests';
     var maintenanceRequestsFactory = {};

     maintenanceRequestsFactory.getMaintainance = function () {
         return $http.get(urlBase);
     };

     maintenanceRequestsFactory.getMaintainance = function (id) {
         return $http.get(urlBase + '/' + id);
     };

     maintenanceRequestsFactory.getMaintainanceByTenant = function (id) {
         return $http.get(urlBase + '/ByTenant/' + id);
     };

     maintenanceRequestsFactory.putMaintainance = function (item) {
         $http({
             method: 'PUT',
             dataType: 'json',
             url: urlBase + '/' + item.maintenanceRequestId,
             data: { item },
             headers: { "Content-Type": "application/json" }
         }).then(function (response) {
             return response;
         });

     };

     maintenanceRequestsFactory.postMaintainance = function (item) {
         $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { item },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
     };

     maintenanceRequestsFactory.deleteMaintainance = function (id) {
         return $http.delete(urlBase + '/' + id);
     };  

     return maintenanceRequestsFactory;
      
}]);