package com.brain.service;

import java.util.ArrayList;


public interface Service<T>{
	/**
	 * 功能:实现注册记录插入
	 * @param t
	 * @return
	 */
	public boolean saveAdminInfo(T t);
	
	/**
	 * 功能:实现登录检查
	 * @param t
	 * @return
	 */
	public ArrayList<T> CheckLoginAndUpdateFiallyLogin(T t);
	
	

}
