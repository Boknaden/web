import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function CampusService(apiUrl, $http, store) {
    this.getAll = getAll

    function getAll (params) {
        var params = params || {}

        return $http({
            url: apiUrl + '/campuses',
            method: 'GET',
            params: params
        })
    }
}

export default app.service('CampusService', [
    'apiUrl',
    '$http',
    CampusService
])
