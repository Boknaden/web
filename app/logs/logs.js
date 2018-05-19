import angular from 'angular'

'use strict'

let app = angular.module('boknaden')
   
function LogsCtrl ($scope, store, $location, growl, LogService, AuthService) {
    if (!AuthService.isAuthenticated()) {
        $location.path('/store')
        return
    }

    if (AuthService.profile().isadmin !== 1) {
        $location.path('/store')
        return
    }

    $scope.logs = []
    $scope.context = {
        page: 1,
        itemsPerPage: 20,
        type: false,
        totalItems: 0,
    }

    $scope.changeType = function (type) {
        $scope.context.type = type
        $scope.context.page = 1
        reload()
    }

    function reload () {
        $scope.showSpinner = true

        LogService.getAll($scope.context.page, $scope.context.type).then(function (res) {
            $scope.showSpinner = false
            $scope.logs = res.data.logs
            $scope.context.totalItems = res.data.total
        }, function (err) {
            growl.error(err, {title: 'Error'})
        })
    }

    $scope.reload = reload

    $scope.go = function (path) {
        $location.path(path)
    }

    $scope.$watch('context.page', function () {
        reload()
    })

    reload()

}

 export default app.controller('LogsCtrl', [
    '$scope',
    'store',
    '$location',
    'growl',
    'LogService',
    'AuthService',
    LogsCtrl
])
 