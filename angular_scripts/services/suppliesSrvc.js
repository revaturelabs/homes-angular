//'use strict';
//angular.module('app')
//.factory('suppliesSrvc', ['$http', function ($http) {
//    return {
//        getItems : function(){
//            return $http.get('/api/Supplies');
//        },
//        getItems: function (id) {
//            return $http.get('/api/Supplies/'+id);
//        },
//        putItem: function (item) {
//            return $http.put('api/Supplies/', item);
//        },
//        postAddress: function (id) {
//            return $http.post('api/Supplies/', id);
//        },
        
//        deleteItem : function(id){
//            return $http({
//                method: 'DELETE',
//                url: '/api/Supplies/' + id
//            });
//        }
//    };
//}]);

//COMPLETED - NEED REVIEW
angular.module('StartApp.managerApp')
    .factory('SuppliesFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api/Supplies';
        var suppliesFactory = {};
        suppliesFactory.getSupplies = function () {
            return $http.get(urlBase);
        };
        suppliesFactory.getSupply = function (id) {
            return $http.get(urlBase + "/" + id);
        };
        suppliesFactory.PostSupply = function (supply) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: { supply },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };
        suppliesFactory.PutSupply = function (supply) {
            $http({
                method: 'PUT',
                dataType: 'json',
                url: urlBase + "/" + supply.supplyId,
                data: { tenant },
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };
        suppliesFactory.DeleteSupply = function (id) {
            return $http.delete(urlBase + "/" + id)
        };

        return suppliesFactory;

    }]);