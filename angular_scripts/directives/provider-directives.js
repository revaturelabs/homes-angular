var app = angular.module('providerDir', []);

//Manager Directives
app.directive('providerSidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Providers/Partials/provider-sidebar.html'        
    };
});

app.directive('providerNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Providers/Partials/provider-navbar.html'
    };
});


app.directive('providerProfile', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/Providers/Partials/Provider-profile.html'
    };
});

