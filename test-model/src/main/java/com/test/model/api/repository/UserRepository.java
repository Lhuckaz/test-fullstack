package com.test.model.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.test.model.api.model.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
	public List<User> findAll();
}
