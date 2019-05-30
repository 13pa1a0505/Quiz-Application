package com.quiz.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author bommidiv
 *
 */
@Entity
@Table(name = "Feedback")
public class Feedback {

	@Id
	@Column(name = "u_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long uId;

	@Column(name = "rating")
	private String rating;

	@Column(name = "comments")
	private String comments;

	public long getuId() {
		return uId;
	}

	public void setuId(long uId) {
		this.uId = uId;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "Feedback [u_Id=" + uId + ", rating=" + rating + ", comments=" + comments + "]";
	}

}
