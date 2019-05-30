package com.quiz.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quiz.beans.Tempquestion;
import com.quiz.repository.TempQRepo;
import com.quiz.services.QuestionService;

/**
 * @author bommidiv
 *
 */
@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private TempQRepo tRepo;

	@Override
	public long getNoOfRecords() {

		return tRepo.count();

	}

	public List<Tempquestion> getAllPage(int tid, int level, int pageNumber, int recordsPerPage) {
		Pageable pageable = PageRequest.of(pageNumber - 1, recordsPerPage);
		Page<Tempquestion> page = tRepo.findAll(pageable);
		return page.getContent();

	}

}
