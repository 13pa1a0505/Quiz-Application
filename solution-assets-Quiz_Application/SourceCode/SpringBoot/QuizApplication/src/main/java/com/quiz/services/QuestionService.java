package com.quiz.services;

import java.util.List;

import com.quiz.beans.Tempquestion;

/**
 * @author bommidiv
 *
 */
public interface QuestionService {
	public long getNoOfRecords();

	public List<Tempquestion> getAllPage(int tid, int level, int pageNumber, int recordsPerPage);
}
