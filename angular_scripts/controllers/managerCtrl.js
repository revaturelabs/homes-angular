'use strict';
angular.module('StartApp.managerApp')
    .controller("managerCtrl", function ($http, $scope) {


    })
    .controller('DashManagersController', function ($scope, genderFactory) {
        $scope.status;
        $scope.genders;

        getGenders();

        function getGenders() {
            genderFactory.getGenders()
                .then(function (response) {
                    $scope.genders = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Genders: ' + error.message;
                });
        }


    })
    .controller('DashboardController', function ($scope) {

    })

    .controller('DashTenantsController', function ($scope) {

    })

    .controller('DashRecruitersController', function ($scope) {

        $scope.demo = "This is the Dashboard Recruiters View"
    })
    .controller('DashProvidersController', function ($scope) {

        $scope.demo = "This is the Dashboard Providers View"
    })
    .controller('SuppliesController', function ($scope) {
        $scope.demo = "This is the Supplies View"
    })
    .controller('UsersController', function ($scope) {
        $scope.demo = "This is the Users View"
    });