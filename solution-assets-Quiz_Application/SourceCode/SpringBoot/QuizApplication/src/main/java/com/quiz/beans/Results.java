package com.quiz.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 * @author bommidiv
 *
 */
@Entity
@Table(name = "result_data")
@EntityListeners(AuditingEntityListener.class)

// class
public class Results {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long uniqueid;

	@Column(name = "u_id")
	private long uID;

	@Column(name = "t_id")
	private String technologyName;

	@Column(name = "level")
	private String level;

	@Column(name = "qsns_attempted")
	private int qsnsattempted;

	@Column(name = "qsns_correct")
	private int qsnscorrect;

	@Column(name = "score")
	private int score;

	public Results() {
		super();

	}

	public Results(long uniqueid, long uID, String technologyName, String level, int qsnsattempted, int qsnscorrect,
			int score) {
		super();
		this.uniqueid = uniqueid;
		this.uID = uID;
		this.technologyName = technologyName;
		this.level = level;
		this.qsnsattempted = qsnsattempted;
		this.qsnscorrect = qsnscorrect;
		this.score = score;
	}

	public long getUniqueid() {
		return uniqueid;
	}

	public void setUniqueid(long uniqueid) {
		this.uniqueid = uniqueid;
	}

	public long getuID() {
		return uID;
	}

	public void setuID(long uID) {
		this.uID = uID;
	}

	public String getTechnologyName() {
		return technologyName;
	}

	public void setTechnologyName(String technologyName) {
		this.technologyName = technologyName;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public int getQsnsattempted() {
		return qsnsattempted;
	}

	public void setQsnsattempted(int qsnsattempted) {
		this.qsnsattempted = qsnsattempted;
	}

	public int getQsnscorrect() {
		return qsnscorrect;
	}

	public void setQsnscorrect(int qsnscorrect) {
		this.qsnscorrect = qsnscorrect;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "Results [uniqueid=" + uniqueid + ", uID=" + uID + ", technologyName=" + technologyName + ", level="
				+ level + ", qsns_attempted=" + qsnsattempted + ", qsns_correct=" + qsnscorrect + ", score=" + score
				+ "]";
	}

}