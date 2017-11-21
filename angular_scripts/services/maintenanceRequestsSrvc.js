//COMPLETED - NEED A REVIEW

angular.module('StartApp.managerApp')
    .factory('maintenanceRequestsSrvc', ['$http', function ($http) {

     var urlBase = 'https://homes-webapi.azurewebsites.net/api/MaintenanceRequests';
     var maintenanceRequestsFactory = {};

     maintenanceRequestsFactory.getMaintenanceRequests = function () {
         return $http.get(urlBase);
     };

     maintenanceRequestsFactory.getMaintenanceRequest = function (id) {
         return $http.get(urlBase + '/' + id);
     };

     maintenanceRequestsFactory.getMaintenanceRequestByTenant = function (id) {
         return $http.get(urlBase + '/ByTenant/' + id);
     };

     maintenanceRequestsFactory.putMaintenanceRequest = function (item) {
         $http({
             method: 'PUT',
             dataType: 'json',
             url: urlBase + '/' + item.maintenanceRequestId,
             data: { item },
             headers: {
                 "Content-Type": "application/json"//,
                 //"Authentication": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         }).then(function (response) {
             return response;
         });

     };

     maintenanceRequestsFactory.postMaintenanceRequest = function (item) {
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

     maintenanceRequestsFactory.deleteMaintainanceRequest = function (id) {
         return $http.delete(urlBase + '/' + id);
     };  

     return maintenanceRequestsFactory;
      
}]);