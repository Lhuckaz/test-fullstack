'use strict';

angular.module('test').config(['$stateProvider', function ($stateProvider) {

	$stateProvider.state('app', {
		url: '/home',
		templateUrl: '/app/app-template.html',
		controller: 'AppController'
	});
	
	$stateProvider
    .state('user', {
        url: '/user/',
        templateUrl: '/app/partials/list.html',
        controller:'ListController',
        controllerAs:'ctrl',
        resolve: {
            users: function ($q, UserService) {
                var deferred = $q.defer();
                UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                return deferred.promise;
            }
        }
    });
	
	$stateProvider
    .state('add', {
        url: '/user/add',	
        templateUrl: '/app/partials/add.html',
        controller:'AddController',
        controllerAs:'ctrl'
    });
	
	$stateProvider
    .state('edit', {
        url: '/user/:id',	
        templateUrl: '/app/partials/edit.html',
        controller:'EditController',
        controllerAs:'ctrl',
        resolve: {
            users: function ($stateParams, $q, UserService) {
                var deferred = $q.defer();
                UserService.loadUserToEdit($stateParams.id).then(deferred.resolve, deferred.resolve);
                return deferred.promise;
            }
        }
    });

}]);