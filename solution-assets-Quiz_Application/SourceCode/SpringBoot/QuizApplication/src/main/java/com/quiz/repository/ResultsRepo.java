package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.beans.Results;

/**
 * @author bommidiv
 *
 */
public interface ResultsRepo extends JpaRepository<Results, Long> {
	List<Results> findByuID(long uid);

}
