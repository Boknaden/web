'use strict'

let app = angular.module('boknaden')

function InterestCtrl ($scope, $location, $routeParams, growl, AdService, AuthService) {
    if (!AuthService.isAuthenticated() || !AuthService.isVerified()) {
        $location.path('/store')
    }

    $scope.aditems = []
    $scope.selectedAdItems = []
    $scope.showSpinner = true

    reload()

    $scope.go = function (path) {
        $location.path(path)
    }

    function reload () {
        var filterParams = {}

        if ($location.search().hasOwnProperty('course')) {
            filterParams.courseid = $location.search().course
        }
    }
}

export default app.controller('InterestCtrl', [
    '$scope',
    '$location',
    '$routeParams',
    'growl',
    'AdService',
    'AuthService',
    InterestCtrl
])
