package com.brain.test;

import java.sql.Timestamp;
import java.util.ArrayList;

import org.junit.Test;

import com.brain.Pojo.ColorMatch;
import com.brain.Pojo.FruitSort;
import com.brain.Pojo.Go;
import com.brain.Pojo.Mahjong;
import com.brain.Pojo.MathMatch;
import com.brain.Pojo.NumberSort;
import com.brain.Pojo.ThreeSum;
import com.brain.Pojo.User;
import com.brain.service.ColorMatchService;
import com.brain.service.FruitSortService;
import com.brain.service.GoService;
import com.brain.service.MahjongService;
import com.brain.service.MathMatchService;
import com.brain.service.NumberSortService;
import com.brain.service.ThreeSumService;
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
	@Test
	public void testGo(){
		Go go = new Go();
		go.setId(3);
		go.setScore(600);
		GoService goService = new GoService();
		System.out.println(goService.saveGoScore(go));
		System.out.println(goService.getAvg(3));
	}
	@Test
	public void testMa(){
		Mahjong mahjong = new Mahjong();
		
		MahjongService mahjongService = new MahjongService();
		
		mahjong.setId(5);
		mahjong.setScore(300);
		System.out.println(mahjongService.saveMahjongScore(mahjong));
		System.out.println(mahjongService.getAvg(5));
	}
	
	@Test
	public void testMath(){
		MathMatch mathMatch = new MathMatch();
		MathMatchService mathMatchService = new MathMatchService();
		mathMatch.setId(7);
		mathMatch.setScore(800);
		System.out.println(mathMatchService.saveMathMatchScore(mathMatch));
		System.out.println(mathMatchService.getAvg(7));
	}
	@Test 
	public void testNumberSort(){
		NumberSort numberSort = new NumberSort();
		
		numberSort.setClickTime(30);
		
		numberSort.setId(4);
		NumberSortService numberSortService = new NumberSortService();
		
		
		System.out.println(numberSortService.saveNumberSortTime(numberSort));
		
		System.out.println(numberSortService.getAvg(4));	
	}
	
	@Test
	public void testFruitSort(){
		FruitSort fruitSort = new FruitSort();
		fruitSort.setClickTime(90);
		fruitSort.setId(5);
		FruitSortService fruitSortService = new FruitSortService();
		System.out.println(fruitSortService.saveFruitSortTime(fruitSort));
		System.out.println(fruitSortService.getAvg(5));
	}
	
	@Test
	public void testColor(){
		ColorMatch colorMatch = new ColorMatch();
		
		colorMatch.setId(3);
		colorMatch.setScore(800);
		
		ColorMatchService colorMatchService = new ColorMatchService();
		
		System.out.println(colorMatchService.saveColorScore(colorMatch));
		System.out.println(colorMatchService.getAvg(3));
	}
	@Test
	public void testThree(){
		ThreeSum threeSum = new ThreeSum();
		threeSum.setId(3);
		threeSum.setScore(800);
		ThreeSumService threeSumService = new ThreeSumService();
		
		System.out.println(threeSumService.saveThreeSumScore(threeSum));
		System.out.println(threeSumService.getAvg(3));
	}
}
