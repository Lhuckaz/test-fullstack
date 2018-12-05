'use strict';

angular.module('test').controller('AppController', ['$scope', '$state',
	function ($scope, $state) {

}]);
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
'use strict';

angular.module('test').controller('AppController', ['$scope', '$state',
	function ($scope, $state) {

}]);
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
"use strict";angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]);
'use strict';

angular.module('test').controller('AppController', ['$scope', '$state',
	function ($scope, $state) {

}]);
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
"use strict";angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]);
'use strict';

angular.module('test').controller('AppController', ['$scope', '$state',
	function ($scope, $state) {

}]);
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
"use strict";angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]),angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]);
'use strict';

angular.module('test').controller('AppController', ['$scope', '$state',
	function ($scope, $state) {

}]);
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
"use strict";angular.module("test").controller("AppController",["$scope","$state",function(r,e){}]),angular.module("test").config(["$stateProvider",function(r){r.state("app",{url:"/home",templateUrl:"/app/app-template.html",controller:"AppController"}),r.state("user",{url:"/user/",templateUrl:"/app/partials/list.html",controller:"ListController",controllerAs:"ctrl",resolve:{users:function(r,e){var t=r.defer();return e.loadAllUsers().then(t.resolve,t.resolve),t.promise}}}),r.state("add",{url:"/user/add",templateUrl:"/app/partials/add.html",controller:"AddController",controllerAs:"ctrl"}),r.state("edit",{url:"/user/:id",templateUrl:"/app/partials/edit.html",controller:"EditController",controllerAs:"ctrl",resolve:{users:function(r,e,t){var l=e.defer();return t.loadUserToEdit(r.id).then(l.resolve,l.resolve),l.promise}}})}]),angular.module("test",["ui.router"]).constant("urls",{URL_API:"http://localhost:5000/api/user/"}).config(["$urlRouterProvider","$stateProvider",function(r,e){r.otherwise("/home")}]).run(["$rootScope","$state",function(r,e){}]);
'use strict';

angular.module('test').controller('AppController', ['$scope', '$state',
	function ($scope, $state) {

}]);
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