'use strict';
angular.module('StartApp.managerApp')
    .controller("managerCtrl", function ($http, $scope) {


    })
    .controller('DashManagersController', function ($scope, genderFactory) {
      //  $scope.status;
      //  $scope.genders;
        
      //  postGender();
      //  getGenders();
      //     **** FUNCTION TO BE CALL INSIDE THE CONTROLLER ****
        //    ***** Function that send the id of gender that wants to get *****
        //  function getGenders(id) {
        //    genderFactory.getGenders(id)
        //        .then( function (response) {
        //            $scope.genders = response.data;
        //        }, function (error) {
        //            $scope.status = 'Unable to load Genders: ' + error.message;
        //        });
        //}
     //     **** FUNCTION TO BE CALL OUTSIDE CONTROLLER INSIDE HTML
        //    ***** Sames as above but function make a call to receive all genders *****
      //$scope.getGender =  function getGender() {
      //      genderFactory.getGender()
      //          .then(function (response) {
      //              $scope.genders = response.data;
      //          }, function (error) {
      //              $scope.status = 'Unable to load Genders: ' + error.message;
      //          });
      //  }
      //    ***** Function that send the new gender to post in the database *****
      //$scope.postGender =  function postGender(gender) {
      //      genderFactory.postGender(gender)
      //          .then(function (response) {
      //              $scope.genders = response.data;
      //          }, function (error) {
      //              $scope.status = 'Unable to insert Genders: ' + error.message;
      //          });
      //  }


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