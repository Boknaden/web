import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function ForgotPasswordCtrl ($scope, store, $location, $timeout, growl, UserService) {
    $scope.username = ''
    $scope.sentConfirmation = false

    $scope.go = function (path) {
        $location.path(path)
    }

    $scope.doForgotPassword = function () {
        if ($scope.username.length > 0) {
            UserService.forgotPassword($scope.username).then(function (res) {
                $scope.sentConfirmation = true
                $scope.username = ''
                $timeout(() => {
                    $location.path('/login')
                }, 2500)
            })

        }
    }
}

export default app.controller('ForgotPasswordCtrl', [
    '$scope',
    'store',
    '$location',
    '$timeout',
    'growl',
    'UserService',
    ForgotPasswordCtrl
])