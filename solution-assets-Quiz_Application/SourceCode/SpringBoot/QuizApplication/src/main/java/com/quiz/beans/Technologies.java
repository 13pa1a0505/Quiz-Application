package com.quiz.beans;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author bommidiv
 *
 */
@Entity
@Table(name = "technology")
public class Technologies {

	@Id
	private long tid;

	@Column(name = "t_name")
	private String tname;

	@Column(name = "created_by")
	private String createdby;

	@Column(name = "created_on")
	private LocalDate createdon;

	@Column(name = "updated_by")
	private String updatedby;

	@Column(name = "updated_on")
	private LocalDate updatedon;

	public long getTid() {
		return tid;
	}

	public void setTid(long tid) {
		this.tid = tid;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public String getCreatedby() {
		return createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public LocalDate getCreatedon() {
		return createdon;
	}

	public void setCreatedon(LocalDate createdon) {
		this.createdon = createdon;
	}

	public String getUpdatedby() {
		return updatedby;
	}

	public void setUpdatedby(String updatedby) {
		this.updatedby = updatedby;
	}

	public LocalDate getUpdatedon() {
		return updatedon;
	}

	public void setUpdatedon(LocalDate updatedon) {
		this.updatedon = updatedon;
	}

	@Override
	public String toString() {
		return "Technologies [t_id=" + tid + ", tname=" + tname + ", createdby=" + createdby + ", createdon="
				+ createdon + ", updatedby=" + updatedby + ", updatedon=" + updatedon + "]";
	}

}
