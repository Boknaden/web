import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function CourseService(apiUrl, $http) {
    this.getAll = getAll

    function getAll (params) {
        var params = params || {}

        return $http({
            url: apiUrl + '/courses',
            method: 'GET',
            params: params
        })
    }
}

app.service('CourseService', [
    'apiUrl',
    '$http',
    CourseService
])
