angular.module('StartApp.managerApp')
    .factory('contactFactory', ['$http', function ($http) {

        var urlBase = 'http://homes-webapi.azurewebsites.net/api/Contacts';
        var contactFactory = {};

        contactFactory.getContacts = function () {
            return $http.get(urlBase);
        };

        contactFactory.getContactbyoid = function (id) {
            return $http({
                method: 'GET',
                dataType: 'json',
                url: urlBase + '/GetContactByObjectId/'+id,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]
                }
            });

        };


        contactFactory.postContacts = function (contact) {
            return $http({
                method: 'POST',
                dataType: 'json',
                url: 'http://homes-webapi.azurewebsites.net/api/adtenants/addlistofusers',
                data: contact,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]

                }
            })
        };
        return contactFactory;
    }]);