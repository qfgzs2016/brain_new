package com.brain.Pojo;

import java.sql.Date;

public class MathMatch extends User{
	private int score;
	private String createGoTime;
	private Date createDate;
	public MathMatch(int id, int score, String createGoTime, Date createDate) {
		super();
	
		this.score = score;
		this.createGoTime = createGoTime;
		this.createDate = createDate;
	}
	public MathMatch() {
		super();
	}
	
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public String getCreateGoTime() {
		return createGoTime;
	}
	public void setCreateGoTime(String createGoTime) {
		this.createGoTime = createGoTime;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
}
