package com.brain.Pojo;

import java.sql.Date;

public class FruitSort extends User{
	private int clickTime;
	private String createGoTime;
	private Date createDate;
	public FruitSort(int id, int clickTime, String createGoTime, Date createDate) {
		super();
	
		this.clickTime = clickTime;
		this.createGoTime = createGoTime;
		this.createDate = createDate;
	}
	public FruitSort() {
		super();
	}
	
	public int getClickTime() {
		return clickTime;
	}
	public void setClickTime(int clickTime) {
		this.clickTime = clickTime;
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
