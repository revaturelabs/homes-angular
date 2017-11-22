'use strict';
angular.module('StartApp.managerApp')
    .controller("managerCtrl", function ($http, $scope) {


    })
    .controller('DashManagersController', function ($scope, HousingUnitFactory) {
        $scope.status;
        $scope.housingUnit;
        $scope.provider;
    //HOUSING UNITS 
          //GET: getHousingUnits (CALLED IN THE CONTROLLER)
          function getHousingUnits() {
          housingUnitFactory.getHousingUnits()
                .then(function (response) {
                    $scope.housingUnits = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Housing Units: ' + error.message;
                });
       }
          //GET: getHousingUnit (CALLED FROM OUTSIDE THE CONTROLLER)
          $scope.getHousingUnit =  function getHousingUnit(id) {
            housingUnitFactory.getHousingUnit(id)
                .then(function (response) {
                    $scope.housingUnit = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load Housing Unit: ' + error.message;
                });
          }
          //GET: getHousingUnitsWithAddresses (CALLED FORM OUTSIDE THE CONTOLLER)
          $scope.getHousingUnitsWithAddresses = function getHousingUnitsWithAddresses() {
              housingUnitFactory.getHousingUnitsWithAddresses()
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Housing Unit: ' + error.message;
                  });
          }
          //GET: getHousingUnitWithAddresses (CALLED FROM OUTSIDE THE CONTROLLER)
          $scope.getHousingUnitWithAddresses = function getHousingUnitWithAddresses(id) {
              housingUnitFactory.getHousingUnitWithAddresses(id)
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Housing Unit: ' + error.message;
                  });
          }
          //GET: getHousingUnitsWithProviders (CALLED FROM OUTSIDE THE CONTROLLER)
          $scope.getHousingUnitsWithProviders = function getHousingUnitsWithProviders() {
              housingUnitFactory.getHousingUnitsWithProviders()
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Housing Unit: ' + error.message;
                  });
          }
          //GET: getHousingUnitWithProvider (CALLED FROM OUTSIDE THE CONTROLLER)
          $scope.getHousingUnitWithProvider = function getHousingUnitWithProvider(id) {
              housingUnitFactory.getHousingUnitWithProvider(id)
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Housing Unit: ' + error.message;
                  });
          }
          //GET: getHousingUnitsWithTenant (CALLED FROM OUTSIDE THE CONTROLLER)
          $scope.getHousingUnitsWithTenant = function getHousingUnitsWithTenant() {
              housingUnitFactory.getHousingUnitsWithTenant()
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Housing Unit: ' + error.message;
                  });
          }
          //GET: getHousingUnitWithTenant (CALLED FROM OUTSIDE THE CONTROLLER)
          $scope.getHousingUnitWithTenant = function getHousingUnitWithTenant(id) {
              housingUnitFactory.getHousingUnitWithTenant(id)
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Housing Unit: ' + error.message;
                  });
          }
          //POST: postHousingUnit
          $scope.postHousingUnit = function postHosingUnit(housingUnit) {
              housingUnitFactory.postHousingUnit(housingUnit)
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to add Housing Unit: ' + error.message;
                  });
              }
          //PUT: putHousingUnit
          $scope.putHousingUnit = function putHosingUnit(id ,housingUnit) {
              housingUnitFactory.postHousingUnit(id ,housingUnit)
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to insert Housing Unit: ' + error.message;
                  });
          }
          //DELETE: deleteHousingUnit
          $scope.deleteHousingUnit = function deleteHosingUnit(id) {
              housingUnitFactory.deleteHousingUnit(id)
                  .then(function (response) {
                      $scope.housingUnit = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to add Housing Unit: ' + error.message;
                  });
          }
    //PROVIDERS 
          //GET: getProvider (CALLED IN THE CONTROLLER)
          function getProviders() {
              providerFactory.getProviders()
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Providers: ' + error.message;
                  });
          }
          //GET: getProvider (CALLED FROM OUTSIDE THE CONTROLLER)
          $scope.getProvider = function getProvider(id) {
              providerFactory.getProvider(id)
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Providers: ' + error.message;
                  });
          }
          //GET: getProvidersWithContacts(CALLED FORM OUTSIDE THE CONTOLLER)
          $scope.getProvidersWithContacts = function getProvidersWithContacts() {
              providerFactory.getProvidersWithContacts()
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Provider: ' + error.message;
                  });
          }
          //GET: getProviderWithContacts(CALLED FORM OUTSIDE THE CONTOLLER)
          $scope.getProviderWithContacts = function getProviderWithContacts(id) {
              providerFactory.getProviderWithContacts(id)
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Provider: ' + error.message;
                  });
          }
          //GET: getProvidersWithUnits(CALLED FORM OUTSIDE THE CONTOLLER)
          $scope.getProvidersWithUnits = function getProvidersWithUnits() {
              providerFactory.getProvidersWithUnits()
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Provider: ' + error.message;
                  });
          }
          //GET: getProviderWithUnits(CALLED FORM OUTSIDE THE CONTOLLER)
          $scope.getProviderWithUnits = function getProviderWithUnits(id) {
              providerFactory.getProviderWithUnits(id)
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to load Provider: ' + error.message;
                  });
          }
          //POST: postProvider
          $scope.postProvider = function postProvider(provider) {
              providerFactory.postProvider(provider)
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to add Provider: ' + error.message;
                  });
          }
          //PUT: putProvider
          $scope.putProvider = function putProvider(id, provider) {
              providerFactory.postProvider(id, provider)
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to insert Provider: ' + error.message;
                  });
          }
          //DELETE: deleteProvider
          $scope.deleteProvider = function deleteProvider(id) {
              providerFactory.deleteProviders(id)
                  .then(function (response) {
                      $scope.provider = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to delete Provider: ' + error.message;
                  });
          }
        //GET: getSupplyRequests
          $scope.getSupplyRequests = function getSupplyRequests(id) {
              supplyRequestsFactory.getSupplyRequests(id)
                  .then(function (response) {
                      $scope.supplies = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to request supply: ' + error.message;
                  });
          }
          //GET: getMaintenanceRequests
          $scope.getMaintenanceRequests = function getMaintenanceRequests(id) {
              supplyRequestsFactory.getMaintenanceRequests(id)
                  .then(function (response) {
                      $scope.maintenance = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to request supply: ' + error.message;
                  });
          }
        //DELETE: deleteSupplyRequest
          $scope.deleteSupplyRequest = function deleteSupplyRequest(id) {
              supplyRequestsFactory.deleteSupplyRequest(id)
                  .then(function (response) {
                      $scope.supplies = response.data;
                  }, function (error) {
                      $scope.status = 'Unable to delete supply:' + error.message;
                  }
          }

          
       
    })