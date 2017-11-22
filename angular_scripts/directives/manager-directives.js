var app = angular.module('managerDir', ['ui.bootstrap']);

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
        templateUrl: 'manager-profile.html'
    };
});

app.directive('deletebatchClick', ['$q', 'deleteBatchModal', function ($q, dialogModal) {
    return {
        link: function (scope, element, attrs) {
            // ngClick won't wait for our modal confirmation window to resolve,
            // so we will grab the other values in the ngClick attribute, which
            // will continue after the modal resolves.
            // modify the confirmClick() action so we don't perform it again
            // looks for either confirmClick() or confirmClick('are you sure?')
            var ngClick = attrs.ngClick.replace('confirmClick()', 'true')
                .replace('confirmClick(', 'confirmClick(true,');

            // setup a confirmation action on the scope
            scope.confirmClick = function (msg) {
                // if the msg was set to true, then return it (this is a workaround to make our dialog work)
                if (msg === true) {
                    return true;
                }
                // msg can be passed directly to confirmClick('are you sure?') in ng-click
                // or through the confirm-click attribute on the <a confirm-click="Are you sure?"></a>
                msg = msg || attrs.confirmClick || 'Are you sure?';
                // open a dialog modal, and then continue ngClick actions if it's confirmed
                dialogModal(msg).result.then(function () {
                    scope.$eval(ngClick);
                });
                // return false to stop the current ng-click flow and wait for our modal answer
                return false;
            };
        }
    };

}]);

app.service('deleteBatchModal', ['$modal', function ($modal) {
    return function (message, title, okButton, cancelButton) {
        // setup default values for buttons
        // if a button value is set to false, then that button won't be included
        okButton = okButton === false ? false : (okButton || 'Confirm');
        cancelButton = cancelButton === false ? false : (cancelButton || 'Cancel');

        // setup the Controller to watch the click
        var ModalInstanceCtrl = function ($scope, $modalInstance, settings) {
            // add settings to scope
            angular.extend($scope, settings);
            // ok button clicked
            $scope.ok = function () {
                $modalInstance.close(true);
            };
            // cancel button clicked
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

        // open modal and return the instance (which will resolve the promise on ok/cancel clicks)
        var modalInstance = $modal.open({
            templateUrl: 'templates/Managers/modals/manager-batches-delete-modal.html',
            controller: ModalInstanceCtrl,
            resolve: {
                settings: function () {
                    return {
                        modalTitle: title,
                        modalBody: message,
                        okButton: okButton,
                        cancelButton: cancelButton
                    };
                }
            }
        });
        // return the modal instance
        return modalInstance;
    };

}]);


