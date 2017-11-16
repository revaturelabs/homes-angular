var app = angular.module('dir', []);

//Manager Directives
app.directive('sidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/manager-sidebar.html'
    };
});

app.directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/manager-navbar.html'
    };
});


app.directive('profile', function () {
    return {
        restrict: 'E',
        templateUrl: 'manager-profile.html'
    };
});

