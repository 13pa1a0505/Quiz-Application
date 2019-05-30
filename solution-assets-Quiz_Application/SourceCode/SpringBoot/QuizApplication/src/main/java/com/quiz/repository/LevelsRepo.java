package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.beans.Level;

/**
 * @author bommidiv
 *
 */
@Repository
public interface LevelsRepo extends JpaRepository<Level, Long> {

}
