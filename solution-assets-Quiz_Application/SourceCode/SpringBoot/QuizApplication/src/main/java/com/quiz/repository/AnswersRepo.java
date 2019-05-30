package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.beans.Selectedanswer;

/**
 * @author bommidiv
 *
 */
@Repository
public interface AnswersRepo extends JpaRepository<Selectedanswer, Long> {

}
