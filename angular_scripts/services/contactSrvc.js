angular.module('StartApp.managerApp')
    .factory('contactFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api/contacts';
        var contactFactory = {};

        contactFactory.getContacts = function () {
            return $http.get(urlBase);
        };
        contactFactory.postContacts = function (contact) {
            return $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase,
                data: contact,
                headers: { "Content-Type": "application/json" }
            })
        };

        return contactFactory;
    }]);