import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function ChatsService (apiUrl, $http, AuthService) {
    this.getAllChats = getAllChats

    function getAllChats (page) {
        var params = {
                page: page
            }

        return $http({
            url: apiUrl + '/chats',
            method: 'GET',
            params: params,
            headers: {
                'boknaden-verify': AuthService.token()
            }
        })
    }
}

export default app.service('ChatsService', [
    'apiUrl',
    '$http',
    'AuthService',
    ChatsService
])
