package com.brain.test;

import java.sql.Timestamp;
import java.util.ArrayList;

import org.junit.Test;

import com.brain.Pojo.User;
import com.brain.service.UserService;
import com.brain.util.UtilJDBC;

public class test {
	@Test
	public void testUserReg(){
		UserService userService = new UserService();
		User user = new User("liujian", "15858540012", 1, 21, "liujianfei", new Timestamp(System.currentTimeMillis()));
		
		System.out.println(userService.saveAdminInfo(user));
	}
	@Test
	public void testDb(){
		System.out.println(UtilJDBC.getConnection());
	}
	@Test 
	public void testLogin(){
		User user = new User();
		user.setName("liujian");
		user.setPassword("liujianfei");
		UserService userService = new UserService();
		ArrayList<User> users = userService.CheckLoginAndUpdateFiallyLogin(user);
		System.out.println(users.get(0).getName()+";  密码"+users.get(0).getPassword());
	}
}
