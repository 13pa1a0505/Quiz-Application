package com.quiz;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.quiz.beans.Feedback;
import com.quiz.beans.Level;
import com.quiz.beans.Technologies;
import com.quiz.beans.Users;
import com.quiz.repository.FeedbackRepo;
import com.quiz.repository.LevelsRepo;
import com.quiz.repository.TechRepo;
import com.quiz.repository.UsersRepo;
import static org.junit.Assert.*;
/**
 * @author bommidiv
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class QuizApplicationTests {


	@Autowired
	private UsersRepo userRepo;
	
	@Autowired
	private TechRepo techRepo;
	
	@Autowired
	private LevelsRepo levelRepo;
	
	@Autowired
	private FeedbackRepo fbRepo;

	
	@Test
	public void testCountUsers()
	{
		List<Users> user = userRepo.findAll();
		userRepo.count();
		assertEquals(user.size(), 2);
	}
	
	@Test
	public void testCountTechs()
	{
		List<Technologies> techPage= techRepo.findAll();
		techRepo.count();
		assertEquals(techPage.size(), 4);
	}
	
	@Test
	public void testCountLevels()
	{
		List<Level> techPage= levelRepo.findAll();
		levelRepo.count();
		assertEquals(techPage.size(), 3);
	}
	
	@Test
	public void testCountFeedbacks()
	{
		List<Feedback> techPage= fbRepo.findAll();
		levelRepo.count();
		assertEquals(techPage.size(), 1);
	}

}
