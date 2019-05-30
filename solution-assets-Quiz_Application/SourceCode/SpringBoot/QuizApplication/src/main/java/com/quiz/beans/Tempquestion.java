package com.quiz.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author bommidiv
 *
 */
@Entity
@Table(name = "temp_question")
public class Tempquestion {

	@Id
	@Column(name = "id")
	private long id;

	@Column(name = "q_id")
	private long qid;

	@Column(name = "question")
	private String questions;

	@Column(name = "A")
	private String a;

	@Column(name = "B")
	private String b;

	@Column(name = "C")
	private String c;

	@Column(name = "D")
	private String d;

	@Column(name = "t_id")
	private int tid;

	@Column(name = "level")
	private int level;

	@Column(name = "marks")
	private int marks;

	@Column(name = "correct_answer")
	private String correctanswer;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getQid() {
		return qid;
	}

	public void setQid(long qid) {
		this.qid = qid;
	}

	public String getQuestions() {
		return questions;
	}

	public void setQuestions(String questions) {
		this.questions = questions;
	}

	public String getA() {
		return a;
	}

	public void setA(String a) {
		this.a = a;
	}

	public String getB() {
		return b;
	}

	public void setB(String b) {
		this.b = b;
	}

	public String getC() {
		return c;
	}

	public void setC(String c) {
		this.c = c;
	}

	public String getD() {
		return d;
	}

	public void setD(String d) {
		this.d = d;
	}

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public String getCorrectanswer() {
		return correctanswer;
	}

	public void setCorrectanswer(String correctanswer) {
		this.correctanswer = correctanswer;
	}

	@Override
	public String toString() {
		return "Tempquestion [id=" + id + ", qid=" + qid + ", questions=" + questions + ", a=" + a + ", b=" + b + ", c="
				+ c + ", d=" + d + ", tid=" + tid + ", level=" + level + ", marks=" + marks + ", correctanswer="
				+ correctanswer + "]";
	}

}
