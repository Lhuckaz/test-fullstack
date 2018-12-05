'use strict';

angular.module('test')
.controller('ListController', ['UserService', '$scope', '$location', '$state',  function(UserService, $scope, $location, $state) {
	
	var self = this;
	self.getAllUsers = getAllUsers;
	self.removeUser = removeUser;
	self.goEdit = goEdit;

	function getAllUsers() {
		return UserService.getAllUsers();
	}
	
	function removeUser(id) {
		UserService.removeUser(id);
	}
	
	function goEdit(id) {
		
		$state.go('edit', {id: id});
	}
}

]);