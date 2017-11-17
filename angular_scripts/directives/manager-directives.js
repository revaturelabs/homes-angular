var app = angular.module('dir', <]);

//Manager Directives
app.directive('managerSidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Managers/Partials/manager-sidebar.html'
    };
});

app.directive('managerNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Managers/Partials/manager-navbar.html'
    };
});


app.directive('managerProfile', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Managers/Partials/manager-profile.html'
    };
});

