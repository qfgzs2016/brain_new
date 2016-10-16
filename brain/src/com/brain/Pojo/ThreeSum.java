package com.brain.Pojo;

import java.sql.Date;

public class ThreeSum extends User{
	private int score;
	private String createGoTime;
	private Date createDate;
	public ThreeSum(int id, int score, String createGoTime, Date createDate) {
		super();
	
		this.score = score;
		this.createGoTime = createGoTime;
		this.createDate = createDate;
	}
	public ThreeSum() {
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
