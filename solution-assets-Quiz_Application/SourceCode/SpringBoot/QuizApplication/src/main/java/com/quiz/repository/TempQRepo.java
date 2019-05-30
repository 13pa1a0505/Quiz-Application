package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.beans.Question;
import com.quiz.beans.Tempquestion;

/**
 * @author bommidiv
 *
 */
@Repository
public interface TempQRepo extends JpaRepository<Tempquestion, Long> {

	void save(List<Question> returnques);

}
