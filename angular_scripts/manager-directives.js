var app = angular.module('dir', []);

//Manager Directives
app.directive('sidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/manager-sidebar.html',
        controller: function () {
            this.tab = 1;
            this.selectTab = function (setTab) {
                this.tab = setTab;
            };
            this.isSelected = function (checkTab) {
                return this.tab == checkTab;
            };
        },
        controllerAs: 'panel' //Alias
    };
});

app.directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/manager-navbar.html'
    };
});

app.directive('content', function () {
    return {
        restrict: 'E',
        templateUrl: 'manager-content.html'
    };
});

app.directive('profile', function () {
    return {
        restrict: 'E',
        templateUrl: 'manager-profile.html'
    };
});

