var app = angular.module('dir', []);

//Manager Directives
app.directive('sidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Providers/Partials/provider-sidebar.html'        
    };
});

app.directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Providers/Partials/provider-navbar.html'
    };
});


app.directive('profile', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Providers/Partials/provider-profile.html'
    };
});

