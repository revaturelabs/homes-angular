angular.module('StartApp.managerApp')
    .factory('contactFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api/';
        var contactFactory = {};

        contactFactory.getContacts = function () {
            return $http.get(urlBase);
        };
        contactFactory.postContacts = function (contact) {
            $http({
                method: 'POST',
                dataType: 'json',
                url: urlBase + 'adtenants/addlistofusers',
                data: contact,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]

                }
            }).then(function (response) {
                return response;
            });
        };
        return contactFactory;
    }]);