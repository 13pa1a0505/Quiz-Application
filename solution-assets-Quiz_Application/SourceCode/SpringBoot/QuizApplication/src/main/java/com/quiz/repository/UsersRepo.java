package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.quiz.beans.Users;

/**
 * @author bommidiv
 *
 */
@Repository
public interface UsersRepo extends JpaRepository<Users, Long> {

}
