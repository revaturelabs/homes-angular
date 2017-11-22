//COMPLETED - NEED A REVIEW

angular.module('StartApp.managerApp')
    .factory('maintenanceRequestsFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/MaintenanceRequests';
     var maintenanceRequestsFactory = {};

     //maintenanceRequestsFactory.getMaintenanceRequests = function () {
     //    return $http.get(urlBase);
     //};
     maintenanceRequestsFactory.getMaintenanceRequests = function () {
         return $http({
             method: 'GET',
             dataType: 'json',
             url: urlBase + '/All',
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         });

     };

     maintenancerequestsfactory.getmaintenancerequest = function (id) {
         return $http.get(urlbase + '/' + id);
     };
     maintenancerequestsfactory.getmaintenancerequest = function (id) {
         return $http({
             method: 'get',
             datatype: 'json',
             url: urlbase + '/' + id,
             headers: {
                 "content-type": "application/json",
                 "authorization": 'bearer ' + sessionstorage['adal.access.token.key' + cid]
             }
         });

     };

     maintenanceRequestsFactory.getMaintenanceRequestsByHousingUnits = function () {
         return $http({
             method: 'GET',
             dataType: 'json',
             url: urlBase + '/ByHouseUnit/',
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

     maintenanceRequestsFactory.getMaintenanceRequestByProvider = function (id) {
         return $http({
             method: 'GET',
             dataType: 'json',
             url: urlBase + '/ByProvider/' + id,
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
             }
         });

     };

     maintenanceRequestsFactory.putMaintenanceRequest = function (item) {
         return $http({
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
        return $http({
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
        return $http({
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