import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function MyCurriculumCtrl ($scope, $location, growl, AuthService) {

}

export default app.controller('MyCurriculumCtrl', [
    '$scope',
    '$location',
    'growl',
    'AuthService',
    MyCurriculumCtrl
])