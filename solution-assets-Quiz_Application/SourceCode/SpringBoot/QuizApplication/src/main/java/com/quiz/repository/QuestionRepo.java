package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.beans.Question;

/**
 * @author bommidiv
 *
 */
@Repository
public interface QuestionRepo extends JpaRepository<Question, Long> {

}
