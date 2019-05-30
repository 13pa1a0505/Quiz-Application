package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.quiz.beans.Users;

/**
 * @author bommidiv
 *
 */
public interface LoginValidationRepo extends JpaRepository<Users, String> {
	@Query(value = "select * from users u where (u.user_name=(:uname) or u.email_id=(:uname)) and u.password=(:password)", nativeQuery = true)
	public Users findInfoByunameandpassword(@Param("uname") String uname, @Param("password") String password);
}
