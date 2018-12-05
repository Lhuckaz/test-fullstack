package com.test.service.api.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.test.model.api.model.User;
import com.test.model.api.repository.UserRepository;

@Component
public class UserServiceImpl {
	
	@Autowired
	private UserRepository userRepository;

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public User getUser(Long userId) {
		return userRepository.findOne(userId);
	}

	public void addUser(User user) {
		userRepository.save(user);
	}

	public void updateUser(Long id, User user) {
		userRepository.save(user);
	}

	public void deleteTopic(Long userId) {
		userRepository.delete(userId);
	}

}
