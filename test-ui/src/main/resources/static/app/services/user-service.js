'use strict';

angular.module('test').factory('UserService',
		['$http', '$q', 'urls',
	function ($http, $q, urls) {

	var factory = {
			getAllUsers: getAllUsers,
			getUserToEdit: getUserToEdit,
			loadAllUsers: loadAllUsers,
			removeUser: removeUser,
			createUser: createUser,
			loadUserToEdit: loadUserToEdit,
			editUser: editUser
	};

	return factory;
	
	var users;
	var userToEdit;

	function loadAllUsers() {
		var deferred = $q.defer();
		$http.get(urls.URL_API)
		.then(
				function (response) {
					users = response.data;
					deferred.resolve(response);
				},
				function (errResponse) {
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}
	
	function getAllUsers(){
		return users;
	}
	
	function getUserToEdit(){
		return userToEdit;
	}
	
	function removeUser(id) {
		var deferred = $q.defer();
		$http.delete(urls.URL_API + id)
		.then(
				function (response) {
					loadAllUsers();
					deferred.resolve(response.data);
				},
				function (errResponse) {
					console.error('Error trying to remove');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}
	
	function createUser(user) {
		var deferred = $q.defer();
		$http.post(urls.URL_API, user)
		.then(
				function (response) {
					deferred.resolve(response.data);
				},
				function (errResponse) {
					console.error('Error trying to add');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}
	
	function editUser(user) {
		var deferred = $q.defer();
		$http.put(urls.URL_API + user.id, user)
		.then(
				function (response) {
					deferred.resolve(response.data);
				},
				function (errResponse) {
					console.error('Error trying to update');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}
	
	function loadUserToEdit(id) {
		var deferred = $q.defer();
		$http.get(urls.URL_API + id)
		.then(
				function (response) {
					userToEdit = response.data;
					deferred.resolve(response);
				},
				function (errResponse) {
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}
}
]);