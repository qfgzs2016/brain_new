package com.brain.Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.brain.Pojo.ColorMatch;
import com.brain.Pojo.User;
import com.brain.service.ColorMatchService;

public class SaveColorMatchServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}
	
	/**
	 * 
	 * 说明
	 * 保存色眼匹配游戏数据返回今日平均
	 * 前台参数名“score”
	 * 返回中code属性1为正确0为错误,avg属性为返回的用户当天平均分
	 * url:servlet/SaveColorMatchServlet
	 */
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			int score = Integer.parseInt(request.getParameter("score"));
			ColorMatch colorMatch = new ColorMatch();
			ColorMatchService colorMatchService = new ColorMatchService();
			JSONObject jb = new JSONObject();
			HttpSession Session = request.getSession();
			User user = (User)Session.getAttribute("loginuser");
			colorMatch.setId(user.getId());
			colorMatch.setScore(score);
			
			if(colorMatchService.saveColorScore(colorMatch)){
				float avg = colorMatchService.getAvg(user.getId());
				jb.put("code", 1);
				jb.put("avg", avg);
				
			}else{
				jb.put("code", 0);
				jb.put("avg", 0);
			}
		PrintWriter out = response.getWriter();
		out.print(jb);
		out.close();
			
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
