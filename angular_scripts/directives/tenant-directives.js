var app = angular.module('tenantDir', []);

//Tenants Directives
app.directive('tenantSidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Tenants/Partials/tenant-sidebar.html'
    };
});

app.directive('tenantNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Tenants/Partials/tenant-navbar.html'
    };
});

app.directive('tenantProfile', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Tenants/Partials/tenant-profile.html'
    };
});

