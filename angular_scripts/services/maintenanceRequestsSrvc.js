//COMPLETED - NEED A REVIEW

angular.module('StartApp.managerApp')
    .factory('maintenanceRequestsSrvc', ['$http', function ($http) {

     var urlBase = 'https://homes-webapi.azurewebsites.net/api/MaintenanceRequests';
     var maintenanceRequestsFactory = {};

     //maintenanceRequestsFactory.getMaintenanceRequests = function () {
     //    return $http.get(urlBase);
     //};
     maintenanceRequestsFactory.getMaintenanceRequests = function () {
         return $http({
             method: 'GET',
             dataType: 'json',
             url: urlBase,
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         });

     };

     //maintenanceRequestsFactory.getMaintenanceRequest = function (id) {
     //    return $http.get(urlBase + '/' + id);
     //};
     maintenanceRequestsFactory.getMaintenanceRequest = function (id) {
         return $http({
             method: 'GET',
             dataType: 'json',
             url: urlBase + '/' + id,
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         });

     };

     //maintenanceRequestsFactory.getMaintenanceRequestByTenant = function (id) {
     //    return $http.get(urlBase + '/ByTenant/' + id);
     //};
     maintenanceRequestsFactory.getMaintenanceRequestByTenant = function (id) {
         return $http({
             method: 'GET',
             dataType: 'json',
             url: urlBase + '/ByTenant/' + id,
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         }).then(function (response) {
             return response;
         });

     };

     maintenanceRequestsFactory.putMaintenanceRequest = function (item) {
         $http({
             method: 'PUT',
             dataType: 'json',
             url: urlBase + '/' + item.maintenanceRequestId,
             data: { item },
             headers: {
                 "Content-Type": "application/json",
                 "Authentication": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         });

     };

     maintenanceRequestsFactory.postMaintenanceRequest = function (item) {
         $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { item },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });
     };

     //maintenanceRequestsFactory.deleteMaintainanceRequest = function (id) {
     //    return $http.delete(urlBase + '/' + id);
     //};  
     maintenanceRequestsFactory.deleteMaintenanceRequest = function (id) {
         $http({
             method: 'DELETE',
             dataType: 'json',
             url: urlBase + '/' + id,
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         });
     };

     return maintenanceRequestsFactory;
      
}]);