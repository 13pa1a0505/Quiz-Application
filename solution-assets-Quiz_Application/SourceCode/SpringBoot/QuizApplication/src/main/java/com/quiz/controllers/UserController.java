package com.quiz.controllers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.beans.Feedback;
import com.quiz.beans.Level;
import com.quiz.beans.Question;
import com.quiz.beans.RegisterDetails;
import com.quiz.beans.Results;
import com.quiz.beans.Selectedanswer;
import com.quiz.beans.Technologies;
import com.quiz.beans.Tempquestion;
import com.quiz.beans.Users;

import com.quiz.repository.AnswersRepo;
import com.quiz.repository.FeedbackRepo;
import com.quiz.repository.LevelsRepo;
import com.quiz.repository.LoginValidationRepo;
import com.quiz.repository.QuestionRepo;
import com.quiz.repository.RegisterDetailsRepo;
import com.quiz.repository.ResultsRepo;
import com.quiz.repository.TechRepo;
import com.quiz.repository.TempQRepo;
import com.quiz.repository.UsersRepo;
import com.quiz.services.EmailService;
import com.quiz.services.QuestionService;
import com.quiz.services.RegisterUserService;

/**
 * @author bommidiv
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({ "/users" })
public class UserController {

	@Value("${context.cc}")
	private String ccemail;

	@Value("${mail.to}")
	private String email;

	@Value("${app.pageNumber}")
	private Integer pageNumber;

	@Value("${app.recordsPerPage}")
	private Integer records;

	@Value("${admin}")
	private String add;

	@Autowired
	private RegisterUserService userService;

	@Autowired
	private QuestionService qService;

	@Autowired
	private UsersRepo userRepo;

	@Autowired
	private ResultsRepo resultRepo;

	@Autowired
	private TechRepo techRepo;

	@Autowired
	private QuestionRepo qRepo;

	@Autowired
	AnswersRepo answerrepo;

	@Autowired
	private EmailService emailService;

	@Autowired
	private LevelsRepo lRepo;

	@Autowired
	private FeedbackRepo fbRepo;

	@Autowired
	private TempQRepo tRepo;

	@Autowired
	public LoginValidationRepo loginValidationRepo;
	
	@Autowired
	public RegisterDetailsRepo registerDetailsRepo;

	private long uid;
	private String name;
	private String url;
	public long qid;
	public String tech;
	public String ln;

	HttpSession session;
	HttpSession session1;
	HttpSession session2;
	Selectedanswer selectedanswer = new Selectedanswer();
	Tempquestion tq = new Tempquestion();
	Users u = new Users();
	
	
	@GetMapping(path = { "/registerDetails" })
	public List<RegisterDetails> registerDetails(RegisterDetails reg) {
		return registerDetailsRepo.findAll();
	}
	
	/**
	 * Save the Register user details
	 * 
	 * @param users
	 * @return
	 * @throws Exception
	 */
	@PostMapping(path={"/{gender}/{sq}"})
	public Users create(@PathVariable String gender,@PathVariable String sq,@RequestBody Users users) throws Exception {
		if(userRepo.count()==0)
		{
			users.setCreatedBy(add);
			users.setUpdatedBy(add);
			Date date = new Date();
			users.setCreatedOn(date);
			users.setUpdatedOn(date);
			users.setRole("admin");
			users.setGender(gender);
			users.setSecurityQuestion(sq);
			userService.saveUser(users);
			List<Users> user = userRepo.findAll();
			uid = users.getUid();
			for (Users use : user) {
				if (use.getUid() == uid) {

					ccemail = use.getEmail();
					url = "http://localhost:4200/login";
				}
			}
			
			emailService.sendSimpleMessage(users, url, ccemail, email);
		}
		else
		{
		users.setCreatedBy(add);
		users.setUpdatedBy(add);
		Date date = new Date();
		users.setCreatedOn(date);
		users.setUpdatedOn(date);
		users.setRole("user");
		users.setGender(gender);
		users.setSecurityQuestion(sq);
		userService.saveUser(users);
		List<Users> user = userRepo.findAll();
		uid = users.getUid();
		for (Users use : user) {
			if (use.getUid() == uid) {

				ccemail = use.getEmail();
				url = "http://localhost:4200/login";
			}
		}
		
		emailService.sendSimpleMessage(users, url, ccemail, email);
		}
		return users;
	}

	/**
	 * Login Validation
	 * 
	 * @param uname
	 * @param pwd
	 * @param req
	 * @return
	 */
	@GetMapping(value = "/loginvalidation/{uname}/{pwd}")
	public String loginpage(@PathVariable String uname, @PathVariable String pwd, HttpServletRequest req) {

		String userRole = null;
		Users resmodel = loginValidationRepo.findInfoByunameandpassword(uname, pwd);
		if (resmodel != null) {
			userRole = resmodel.getRole();
			uid = resmodel.getUid();
			name = resmodel.getFirstName();
			getuser(name, req);
		} else {
			userRole = "error";
		}
		return userRole;
	}

	/**
	 * To set the user in session
	 * 
	 * @param name
	 * @param req
	 * @return
	 */
	public HttpSession getuser(String name, HttpServletRequest req) {
		session = req.getSession();
		session1 = req.getSession();
		session.setAttribute("username", name);
		session1.setAttribute("id", uid);
		return session;
	}

	/**
	 * To Fetch the all user details
	 * 
	 * @param users
	 * @return
	 */
	@GetMapping(path = { "/All" })
	public List<Users> adminPage(Users users) {

		List<Users> use = userRepo.findAll();
		List<Users> lst = new ArrayList<Users>();
		for (Users u : use) {
			if (u.getRole().equalsIgnoreCase("user")) {
				lst.add(u);
			}
		}
		return lst;
	}

	/**
	 * To save the feedback from the user
	 * 
	 * @param feedback
	 * @return
	 * @throws Exception
	 */
	@PostMapping(path = { "/feedback" })
	public Feedback feedback(@RequestBody Feedback feedback) throws Exception {
		fbRepo.save(feedback);
		return feedback;
	}

	/**
	 * To fetch the technologies list from table
	 * 
	 * @param techs
	 * @return
	 */
	@GetMapping(path = { "/technologiesDetails" })
	public List<Technologies> techPage(Technologies techs) {
		return techRepo.findAll();
	}

	/**
	 * Add the technology by Admin
	 * 
	 * @param techs
	 * @return
	 * @throws Exception
	 */
	@PostMapping(path = { "/addingTechnology" })
	public Technologies addtech(@RequestBody Technologies techs) throws Exception {

		techs.setCreatedby(add);
		techs.setUpdatedby(add);
		LocalDate date = LocalDate.now();
		techs.setCreatedon(date);
		techs.setUpdatedon(date);
		techRepo.save(techs);
		return techs;
	}

	/**
	 * Delete the technology by Admin
	 * 
	 * @param tid
	 * @param techs
	 * @return
	 */
	@GetMapping(path = { "/deletingTechnology/{tid}" })

	public Technologies delTech(@PathVariable("tid") long tid, Technologies techs) {

		List<Technologies> ques = techRepo.findAll();
		for (Technologies que : ques) {
			if ((que.getTid() == tid)) {

				techRepo.deleteById(tid);
			}
		}
		return techs;
	}

	/**
	 * To fetch the questions from tables based on the technology id and level id
	 * 
	 * @param tid
	 * @param level
	 * @param count
	 * @param questions
	 * @return
	 */
	@GetMapping("/allQuestions/{tid}/{level}/{count}")
	public List<Tempquestion> queRetrieve(@PathVariable int tid, @PathVariable int level, @PathVariable int count,
			Question questions) {
		List<Question> page = qRepo.findAll();
		pageNumber = count;
		if (tRepo.count() != 0) {
			tRepo.deleteAll();
		}
		List<Question> returnques = new ArrayList<Question>();
		for (Question que : page) {
			if (tid == que.getTid() && level == que.getLevel()) {
				returnques.add(que);
				tq.setId(que.getId());
				tq.setQid(que.getQid());
				tq.setQuestions(que.getQuestions());
				tq.setA(que.getA());
				tq.setB(que.getB());
				tq.setC(que.getC());
				tq.setD(que.getD());
				tq.setCorrectanswer((que.getCorrectanswer()));
				tq.setMarks(que.getMarks());
				tq.setLevel(que.getLevel());
				tq.setTid(que.getTid());
				tRepo.save(tq);

			}

		}

		return getAllpaging(tid, level, pageNumber);

	}

	/**
	 * Pagination in test page
	 * 
	 * @param tid
	 * @param level
	 * @param pageNumber
	 * @return
	 */
	@GetMapping("/page")
	@ResponseBody
	public List<Tempquestion> getAllpaging(int tid, int level, int pageNumber) {

		int page = pageNumber;
		int recordsPerPage = records;
		return getAllpaging(tid, level, page, recordsPerPage);
	}

	/**
	 * Pagination in test page
	 * 
	 * @param tid
	 * @param level
	 * @param page
	 * @param recordsPerPage
	 * @return
	 */
	public List<Tempquestion> getAllpaging(int tid, int level, int page, int recordsPerPage) {

		long noOfRecords = qService.getNoOfRecords();

		long noOfPages = (int) Math.ceil(noOfRecords * 1.0 / recordsPerPage);
		List<Tempquestion> pageList = qService.getAllPage(tid, level, page, recordsPerPage);
		return pageList;

	}

	/**
	 * Fetch the all question and answers
	 * 
	 * @param tid
	 * @param level
	 * @return
	 */
	@GetMapping(path = { "/fectchingAnswers/{tid}/{level}" })
	public List<Question> answersRetrieve(@PathVariable int tid, @PathVariable int level) {

		List<Question> ques = qRepo.findAll();
		List<Question> q = new ArrayList<Question>();
		for (Question question : ques) {
			if (question.getTid() == tid && question.getLevel() == level) {
				q.add(question);
			}
		}
		return q;
	}

	/**
	 * To the submitted answer in separate table
	 * 
	 * @param selectedOption
	 * @param qId
	 * @return
	 */
	@GetMapping("/selectedAnswer/{selectedOption}/{qId}")
	public Selectedanswer validateAnswer(@PathVariable("selectedOption") String selectedOption,
			@PathVariable("qId") long qId) {
		
		
		if (selectedOption != null) {
			selectedanswer.setQid(qId);
			selectedanswer.setSelectedOption(selectedOption);

		}
		return answerrepo.save(selectedanswer);
	}

	/**
	 * To display the user result details in Admin portal
	 * 
	 * @return
	 */
	@GetMapping("/adminPageResult")
	public List<Results> resultsPageAdmin() {

		return resultRepo.findAll();
	}

	/**
	 * To display the user results in user portal
	 * 
	 * @return
	 */
	@GetMapping("/userPageResult/")
	public List<Results> resultPageUser() {
		uid = (long) session.getAttribute("id");

		return resultRepo.findByuID(uid);
	}

	/**
	 * To validate the submitted answers and correct answers
	 * 
	 * @param tid
	 * @param level
	 * @param selectedAnswer
	 */
	@GetMapping("/answerValidation/{tid}/{level}")
	public void answerPage(@PathVariable int tid, @PathVariable int level, Selectedanswer selectedAnswer) {

		List<Selectedanswer> submittedAnswers = answerrepo.findAll();
		long numberOfSubmittedAnswers = answerrepo.count();
		List<Tempquestion> qusize = tRepo.findAll();

		int correctCount = 0;
		int count = 0;

		if (numberOfSubmittedAnswers != 0) {
			for (Selectedanswer selectedanswer : submittedAnswers) {
				for (Tempquestion question : qusize) {
					if (selectedanswer.getQid() == question.getQid()) {
						count++;
						String correctOption = question.getCorrectanswer();
						if (selectedanswer.getSelectedOption().equals(correctOption)) {
							correctCount++;
						}
					}
				}

			}
			List<Tempquestion> qu = tRepo.findAll();
			List<Technologies> ques = techRepo.findAll();
			for (Tempquestion que : qu) {
				for (Technologies ts : ques) {
					if ((ts.getTid() == tid)) {
						tech = ts.getTname();

					}
				}
				List<Level> lev = lRepo.findAll();
				for (Level ts : lev) {
					if ((ts.getLid() == level)) {
						ln = ts.getLname();

					}
				}
			}
		}
		Results resvalue = new Results(new Date().getTime(), uid, tech, ln, qusize.size(), correctCount, correctCount);
		resultRepo.save(resvalue);

	}

	/**
	 * To display the user profile in their regarding portals
	 * 
	 * @return
	 */
	@GetMapping(path = { "/profiles" })
	public List<Users> displayResourceProfile() {
		uid = (long) session1.getAttribute("id");
		List<Users> user = userRepo.findAll();
		List<Users> profile = new ArrayList<Users>();
		for (Users users : user) {
			if (users.getUid() == (uid)) {
				profile.add(users);
			}
		}
		return profile;
	}

}
