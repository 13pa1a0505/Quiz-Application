package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.beans.Technologies;

/**
 * @author bommidiv
 *
 */
@Repository
public interface TechRepo extends JpaRepository<Technologies, Long> {

}
