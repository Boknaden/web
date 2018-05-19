import angular from 'angular'

'use strict';

let app = angular.module('boknaden')

function bnNavigation ($location, AuthService) {
    return {
        restrict: 'A',
        templateUrl: 'app/components/navigation/navigation.html',
        link: function (scope, element, attrs) {
            scope.isAuthenticated = AuthService.isAuthenticated()
            scope.showNav = false
            scope.go = function (path) {
                $location.path(path)
            }
        }
    }
}

export default app.directive('bnNavigation', [
    '$location',
    'AuthService',
    bnNavigation
])