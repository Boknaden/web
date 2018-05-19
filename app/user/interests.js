import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function UserInterestsCtrl ($scope, $location, growl, InterestService, AuthService) {
    $scope.interests = []
    $scope.isAuthenticated = AuthService.isAuthenticated()
    $scope.showSpinner = true

    $scope.go = function (path) {
        $location.path(path)
    }

    InterestService.get().then(function (res) {
        $scope.showSpinner = false
        $scope.interests = res.data.interests
        console.log($scope.interests)
    }, function (err) {
        console.log(err)
        growl.error(err, {title: 'Error'})
    })
}

export default app.controller('UserInterestsCtrl', [
    '$scope',
    '$location',
    'growl',
    'InterestService',
    'AuthService',
    UserInterestsCtrl
])
