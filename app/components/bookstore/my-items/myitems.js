import angular from 'angular'

'use strict';

var app = angular.module('boknaden')

function bnMyItems () {
    return {
        restrict: 'A',
        templateUrl: 'app/components/bookstore/my-items/myitems.html',
        scope: {
            'items': '='
        },
        link: function (scope) {

        }
    }
}

export default app.directive('bnMyItems', [bnMyItems])
