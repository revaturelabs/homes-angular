var app = angular.module('dir', []);

//Manager Directives
app.directive('sidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/provider-sidebar.html'        
    };
});

app.directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/provider-navbar.html'
    };
});


app.directive('profile', function () {
    return {
        restrict: 'E',
        templateUrl: 'provider-profile.html'
    };
});

