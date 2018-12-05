'use strict';

angular.module('test')
.controller('EditController', ['UserService', '$scope', '$location',  function( UserService, $scope, $location) {
	
	var self = this;
	self.user = UserService.getUserToEdit();
	self.submit = submit;
	self.editedMessage = '';
	self.errorMessage = '';
	
	function submit() {
		editUser(self.user);
	}
	
	function editUser(user) {
		UserService.editUser(user)
		.then(
				function (response) {
					self.editedMessage = 'User edited';
					self.errorMessage='';
				},
				function (errResponse) {
					self.errorMessage = 'Error';
					self.editedMessage='';
				}
		);
	}
	
}
]);