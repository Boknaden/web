import angular from 'angular'

'use strict'

let app = angular.module('boknaden')

function ConfirmInterestsModalCtrl ($scope, AuthService, $uibModalInstance, adItems) {
    $scope.message = "Hei, jeg ønsker følgende fra deg: " + getTexts() + "\n- " + AuthService.profile().firstname + " " + AuthService.profile().lastname

    $scope.items = adItems
    $scope.confirmSelection = function () {
        $uibModalInstance.close($scope.message)
    }
    $scope.dismiss = function () {
        $uibModalInstance.dismiss('cancel')
    }
    $scope.calculateTotalPrice = function () {
        var price = 0;

        for (var i = 0; i < adItems.length; i++) {
            price += adItems[i].price
        }
        
        return price
    }

    function getTexts () {
        var texts = []
        for (var i = 0; i < adItems.length; i++) {
            texts.push(adItems[i].text)
        }
        return texts.join(', ')
    }
}

export default app.controller('ConfirmInterestsModalCtrl', [
    '$scope',
    'AuthService',
    '$uibModalInstance',
    'adItems',
    ConfirmInterestsModalCtrl
])
