import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function UniversityService(apiUrl, $http, store) {
    this.getAll = getAll

    function getAll (params) {
        var params = params || {}

        return $http({
            url: apiUrl + '/universities',
            method: 'GET',
            params: params
        })
    }
}

export default app.service('UniversityService', [
    'apiUrl',
    '$http',
    UniversityService
])
