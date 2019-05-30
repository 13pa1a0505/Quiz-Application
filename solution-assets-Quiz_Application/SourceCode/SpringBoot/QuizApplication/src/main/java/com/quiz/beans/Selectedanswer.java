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
@Table(name = "T_Selectedanswer")
public class Selectedanswer {

	@Id
	private long qid;

	@Column(name = "selectedOption")
	private String selectedOption;

	public Selectedanswer(long qid, String selectedOption) {
		super();
		this.qid = qid;
		this.selectedOption = selectedOption;
	}

	public Selectedanswer() {
		super();
	}

	public String getSelectedOption() {
		return selectedOption;
	}

	public void setSelectedOption(String selectedOption) {
		this.selectedOption = selectedOption;
	}

	public long getQid() {
		return qid;
	}

	public void setQid(long qid) {
		this.qid = qid;
	}

	@Override
	public String toString() {
		return "Selectedanswer [qid=" + qid + ", selectedOption=" + selectedOption + "]";
	}

}
