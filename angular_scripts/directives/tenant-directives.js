var app = angular.module('dir', []);

//Tenants Directives
app.directive('tenantSidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Tenants/Partials/tenant-sidebar.html's
    };
});

app.directive('tenantNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/tenant-navbar.html'
    };
});

app.directive('tenantProfile', function () {
    return {
        restrict: 'E',
        templateUrl: 'tenant-profile.html'
    };
});

