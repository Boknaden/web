import angular from 'angular'

'use strict';

var app = angular.module('boknaden')

function bnNavigation () {
    return {
        restrict: 'A',
        templateUrl: 'app/components/navigation/navigation.html',
        link: function (scope, element, attrs) {
            $scope.show = false
        }
    }
}

export default app.directive('bnNavigation', [bnNavigation])
