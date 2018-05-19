import angular from 'angular'

'use strict';

var app = angular.module('boknaden')

function bnSidebar () {
    return {
        restrict: 'A',
        templateUrl: 'app/components/sidebar/sidebar.html',
        controller: bnSidebarCtrl,
    }
}

function bnSidebarCtrl ($scope) {
    $scope.show = false
}

export default app.directive('bnSidebar', [bnSidebar])
