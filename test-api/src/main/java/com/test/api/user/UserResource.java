package com.test.api.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.model.api.model.User;
import com.test.service.api.service.UserServiceImpl;

@RestController
public class UserResource {
	
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@RequestMapping("/api/user")
	public List<User> listAll(){
		return userServiceImpl.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/api/user")
	public void addUser(@RequestBody User user) {
		userServiceImpl.addUser(user);
	}
	
	@RequestMapping("/api/user/{id}")
	public User listUser(@PathVariable Long id) {
		return userServiceImpl.getUser(id);
	}	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/api/user/{id}")
	public void deleteTopic(@PathVariable Long id) {
		userServiceImpl.deleteTopic(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/api/user/{id}")
	public void updateUser(@RequestBody User user, @PathVariable Long id) {
		userServiceImpl.updateUser(id, user);
	}
}
