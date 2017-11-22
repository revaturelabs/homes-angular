angular.module('StartApp.managerApp')
    .factory('contactFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api/contacts';
        var contactFactory = {};

        contactFactory.getContacts = function () {
            return $http.get(urlBase);
        };
        contactFactory.postContacts = function (contact) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: contact,
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response;
            });
        };

        return contactFactory;
    }]);