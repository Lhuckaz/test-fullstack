'use strict';

angular.module('test', ['ui.router'])

.constant('urls', {
    URL_API : 'http://localhost:5000/api/user/'
})

.config(['$urlRouterProvider', '$stateProvider',
	function ($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/home');

}])

.run(['$rootScope', '$state',
	function ($rootScope, $state) {

}]);