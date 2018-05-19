import angular from 'angular'

'use strict';

var app = angular.module('boknaden')

function bnHeader () {
    return {
        restrict: 'A',
        templateUrl: 'app/components/header/header.html',
        scope: {
            'bnLogo': '=?',
        },
        link: function (scope) {
            scope.bnLogo = scope.bnLogo || "assets/images/logo-2.svg"
        }
    }
}

export default app.directive('bnHeader', [bnHeader])