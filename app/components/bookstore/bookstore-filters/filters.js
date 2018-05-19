import angular from 'angular'

'use strict';

var app = angular.module('boknaden')

function bnSidebar () {
    return {
        restrict: 'A',
        templateUrl: 'app/components/bookstore/bookstore-filters/filters.html',
        link: function (scope) {

        }
    }
}

export default app.directive('bnSidebar', [bnSidebar])
