//'use strict';
//angular.module('app')
//    .factory('todoListSvc', ['$http', function ($http) {
//        return {
//            getTenants: function () {
//                return $http.get('/api/Tenants/');
//            },
//            getTenantsById: function (id) {
//                return $http.get('/api/Tenants/' + id);
//            },
//            postTenants: function (item) {
//                return $http.post('/api/Tenants/', item);
//            },
//            putTenant: function (item) {
//                return $http.put('/api/Tenants/', item);
//            },
//            deleteTenant: function (id) {
//                return $http({
//                    method: 'DELETE',
//                    url: '/api/Tenants/' + id
//                });
//            }
//        };
//    }]);

//COMPLETED - NEED REVIEW
angular.module('StartApp.managerApp')
    .factory('TenantsFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api/Tenants';

        var tenantsFactory = {};

        //tenantsFactory.getTenants = function () {
        //    return $http.get(urlBase);
        //};
        tenantsFactory.getTenants = function () {
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
        //tenantsFactory.getTenant = function (id) {
        //    return $http.get(urlBase + "/" + id);
        //};
        tenantsFactory.getTenant = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        //tenantsFactory.getTenantsInfo = function () {
        //    return $http.get(urlBase + "/Info");
        //};
        tenantsFactory.getTenantsInfo = function () {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/Info",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };

        //tenantsFactory.getTenantInfo = function (id) {
        //    return $http.get(urlBase + "/Info/" + id)
        //};
        tenantsFactory.getTenantInfo = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/Info/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        //tenantsFactory.GetTenantsInfoByBatch = function (id) {
        //    return $http.get(urlBase + "/Info/ByBatch/" + id)
        //};
        tenantsFactory.getTenantsInfoByBatch = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + "/Info/ByBatch/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };
        //tenantsFactory.PostTenant = function (tenant) {
        //    $http({
        //        method: 'POST',
        //        dataType: 'json',
        //        url: urlBase,
        //        data: { tenant },
        //        headers: { "Content-Type": "application/json" }
        //    }).then(function (response) {
        //        return response;
        //    });
        //};
        tenantsFactory.postTenant = function (tenant) {
            return $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { tenant },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });

        };
        //tenantsFactory.PutTenant = function (tenant) {
        //    $http({
        //        method: 'PUT',
        //        dataType: 'json',
        //        url: urlBase + "/" + tenant.tenantId,
        //        data: { tenant },
        //        headers: { "Content-Type": "application/json" }
        //    }).then(function (response) {
        //        return response;
        //    });
        //};
        tenantsFactory.putTenant = function (tenant) {
            return $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + "/" + tenant.tenantId,
                data: { tenant },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            }).then(function (response) {
                return response;
            });

        };
        //tenantsFactory.DeleteTenant = function (id) {
        //    return $http.delete(urlBase + "/" + id)
        //};
        tenantsFactory.deleteTenant = function (id) {
            return $http({
                method: 'DELETE',
                dataType: 'json',
                url: urlBase + "/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };

        return tenantsFactory;

    }]);