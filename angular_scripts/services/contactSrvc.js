angular.module('StartApp.managerApp')
    .factory('contactFactory', ['$http', function ($http) {

        var urlBase = 'https://homes-webapi.azurewebsites.net/api/Contacts';
        var contactFactory = {};

        contactFactory.getContacts = function () {
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
                url: 'https://homes-webapi.azurewebsites.net/api/adtenants/addlistofusers',
                data: contact,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + sessionStorage['adal.access.token.key' + cid]

                }
            })
        };
        return contactFactory;
    }]);