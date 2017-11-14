var app = angular.module('dir', []);

//Tenants Directives
app.directive('sidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/tenant-sidebar.html'
    };
});