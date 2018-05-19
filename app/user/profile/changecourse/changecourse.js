import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function ConfirmInterestsModalCtrl ($scope, AuthService, ProfileService, $uibModalInstance) {

    $scope.confirmSelection = function () {
        $uibModalInstance.close($scope.message)
    }
    $scope.dismiss = function () {
        $uibModalInstance.dismiss('cancel')
    }
}

export default app.controller('ChangeCourseModalCtrl', [
    '$scope',
    'AuthService',
    'ProfileService',
    '$uibModalInstance',
    ChangeCourseModalCtrl
])
