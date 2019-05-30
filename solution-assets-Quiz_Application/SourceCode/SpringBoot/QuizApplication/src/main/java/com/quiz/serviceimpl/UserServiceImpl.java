package com.quiz.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quiz.beans.Users;
import com.quiz.repository.UsersRepo;
import com.quiz.services.RegisterUserService;

/**
 * @author bommidiv
 *
 */
@Service
@Transactional
public class UserServiceImpl implements RegisterUserService {

	@Autowired
	private UsersRepo userRepo;

	public void saveUser(Users users) {
		userRepo.save(users);
	}

}
