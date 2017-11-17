
angular.module('managerApp')
    .factory('genderFactory', ['$http', function ($http) {

        var urlBase = 'https://localhost:44364/api/genders';
        var genderFactory = {};

        genderFactory.getGenders = function () {
            return $http.get(urlBase);
        };

        return genderFactory;
    }]);









    //    return {
    //        getItems: function () {
    //            return $http.get('/api/Genders');
    //        },
    //        getItem: function (id) {
    //            return $http.get('/api/Genders/' + id);
    //        },
    //        putItem: function (item) {
    //            return $http.put('/api/Genders/', item);
    //       },
    //        postItem: function (item) {
    //            return $http.post('/api/Genders/', item);
    //        },
    //        deleteItem: function (id) {
    //            return $http({
    //                method: 'DELETE',
    //                url: '/api/Genders/' + id
    //            });
    //        }
    //   };
    //}]);