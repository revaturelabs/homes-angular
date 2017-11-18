angular.module('App')
    .controller('TenantsController', function ($scope, $rootScope) {
    CallAddButton();

    function CallAddButton() {
        $rootScope.$emit("CallAddButton", "Add Tenant");

    };
})