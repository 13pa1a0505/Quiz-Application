package com.quiz.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "registerdetails")
public class RegisterDetails {
	
	@Id
	private long id;

	@Column(name = "gender")
	private String gender;

	@Column(name = "S_question")
	private String squestion;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSquestion() {
		return squestion;
	}

	public void setSquestion(String squestion) {
		this.squestion = squestion;
	}

	@Override
	public String toString() {
		return "RegisterDetails [id=" + id + ", gender=" + gender + ", squestion=" + squestion + "]";
	}
	
	
}
