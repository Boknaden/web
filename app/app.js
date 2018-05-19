import angular from 'angular'
import ngRoute from 'angular-route'
import ngAnimate from 'angular-animate'
import angularStorage from 'angular-storage'
import uiBootstrap from 'angular-ui-bootstrap'
import angularJwt from 'angular-jwt'
import angularGrowl from 'angular-growl-v2'
import angularMoment from 'angular-moment'
import ksSwiper from 'angular-swiper'
import angularSpinner from 'angular-spinner'
import angularAccounting from 'angular-accounting'

import LoginCtrl from './login/login'
import ForgotPasswordCtrl from './login/forgotpassword'
import ResetPasswordCtrl from './login/resetpassword'
import VerifyUserCtrl from './user/verify'
import AdStoreCtrl from './adstore/adstore'
import ProfileCtrl from './user/profile/profile'
import UserCtrl from './user/user'
import UserInterestsCtrl from './user/interests'
import ItemCtrl from './item/item'
import NewItemCtrl from './item/new'
import MyAdsCtrl from './item/mine'
import InterestCtrl from './interest/interest'
import LogsCtrl from './logs/logs'
import MessagesCtrl from './messages/messages'

angular.module('boknaden', [
    ngRoute,
    ngAnimate,
    angularStorage,
    uiBootstrap,
    angularJwt,
    angularGrowl,
    angularMoment,
    ksSwiper,
    angularSpinner,
    angularAccounting
]).config(config)

config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider', 'growlProvider', 'usSpinnerConfigProvider']

function config($routeProvider, $locationProvider, $httpProvider, $compileProvider, $growlProvider, usSpinnerConfigProvider) {

    $growlProvider
        .globalTimeToLive(4000)
        .globalDisableIcons(true)
        .globalDisableCountDown(true)
        .globalPosition('bottom-right')

    $locationProvider.html5Mode(true)

    // routes
    $routeProvider
        .when('/login', {
            templateUrl: 'app/login/login.html',
            controller: LoginCtrl,
        })
        .when('/forgotpassword', {
            templateUrl: 'app/login/forgotpassword.html',
            controller: ForgotPasswordCtrl,
        })
        .when('/resetpassword/:code', {
            templateUrl: 'app/login/resetpassword.html',
            controller: ResetPasswordCtrl,
        })
        .when('/verify/:verificationcode', {
            templateUrl: 'app/user/verify.html',
            controller: VerifyUserCtrl,
        })
        .when('/store', {
            templateUrl: 'app/adstore/adstore.html',
            controller: AdStoreCtrl,
        })
        .when('/profile', {
            templateUrl: 'app/user/profile/profile.html',
            controller: ProfileCtrl,
        })
        .when('/profile/:username', {
            templateUrl: 'app/user/user.html',
            controller: UserCtrl,
        })
        .when('/user/interests', {
            templateUrl: 'app/user/interests.html',
            controller: UserInterestsCtrl,
        })
        .when('/item/new', {
            templateUrl: 'app/item/new.html',
            controller: NewItemCtrl,
        })
        .when('/item/mine', {
            templateUrl: 'app/item/mine.html',
            controller: MyAdsCtrl,
        })
        .when('/item/:itemId', {
            templateUrl: 'app/item/item.html',
            controller: ItemCtrl,
        })
        .when('/item/:itemId/interest', {
            templateUrl: 'app/interest/interest.html',
            controller: InterestCtrl,
        })
        .when('/logs', {
            templateUrl: 'app/logs/logs.html',
            controller: LogsCtrl,
        })
        .when('/messages', {
            templateUrl: 'app/messages/messages.html',
            controller: MessagesCtrl,
        })
        .otherwise({
            redirectTo: '/store',
        })

    $httpProvider.interceptors.push('authInterceptor')
    $httpProvider.defaults.headers.devare = { "Content-Type": "application/json;charset=utf-8" }

    usSpinnerConfigProvider.setDefaults({color: '#0075a1', radius:30, width:8, length: 16})

}

angular
    .module('boknaden')
    .factory('authInterceptor', authInterceptor)

authInterceptor.$inject = ['$rootScope', '$q', '$location']

function authInterceptor($rootScope, $q, $location) {

    return {

        // intercept every request
        request: function(config) {
            config.headers = config.headers || {}
            return config
        },

        // Catch 404 errors
        responseError: function(response) {
            if (response.status === 404) {
                $location.path('/')
                return $q.reject(response)
            } else {
                return $q.reject(response)
            }
        }
    }
}

angular
    .module('boknaden')
    .run(run)

run.$inject = ['$rootScope', '$location', 'amMoment']

function run($rootScope, $location, amMoment) {
    amMoment.changeLocale('nb')
}
