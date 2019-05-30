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
@Table(name = "level")
public class Level {

	@Id
	private long lid;

	@Column(name = "L_name")
	private String lname;

	public long getLid() {
		return lid;
	}

	public void setLid(long lid) {
		this.lid = lid;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	@Override
	public String toString() {
		return "Level [lid=" + lid + ", lname=" + lname + "]";
	}

}
