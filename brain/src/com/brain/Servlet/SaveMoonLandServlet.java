package com.brain.Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.brain.Pojo.Fish;
import com.brain.Pojo.Go;
import com.brain.Pojo.User;
import com.brain.service.FishService;
import com.brain.service.GoService;

public class SaveMoonLandServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	/**
	 * * 说明
	 * 保存月球游戏数据返回今日平均
	 * 返回中code属性1为正确0为错误,avg属性为返回的用户当天平均分
	 * url:servlet/SaveMoonLandServlet
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JSONObject jb = new JSONObject();
		int score = Integer.parseInt(request.getParameter("score"));
		Fish fish = new Fish();
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("loginuser");
		fish.setId(user.getId());
		fish.setScore(score);
		FishService fishService = new FishService();
		if(fishService.saveFishScore(fish)){
			jb.put("avg", fishService.getAvg(user.getId()));
			jb.put("code", 1);
		}else{
			jb.put("code", 0);
			jb.put("avg", 0);
		}
		PrintWriter out = response.getWriter();
		out.print(jb);
		out.close();
	}

}
