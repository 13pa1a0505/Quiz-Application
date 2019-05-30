package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.beans.Feedback;

/**
 * @author bommidiv
 *
 */
public interface FeedbackRepo extends JpaRepository<Feedback, Long> {

}
