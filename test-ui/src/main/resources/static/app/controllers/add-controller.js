'use strict';

angular.module('test')
.controller('AddController', ['UserService', '$scope', '$location',  function( UserService, $scope, $location) {
	
	var self = this;
	self.user = {};
	self.submit = submit;
	self.createdMessage = '';
	self.errorMessage = '';
	
	function submit() {
		if (self.user.id === undefined || self.user.id === null) {
			createUser(self.user);
		}
	}
	
	function createUser(user) {
		UserService.createUser(user)
		.then(
				function (response) {
					self.createdMessage = 'User created';
					self.errorMessage='';
					self.user={};
				},
				function (errResponse) {
					self.errorMessage = 'Error';
					self.createdMessage='';
				}
		);
	}
	
}
]);