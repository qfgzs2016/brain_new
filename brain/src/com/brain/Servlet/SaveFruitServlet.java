package com.brain.Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.brain.Pojo.FruitSort;
import com.brain.Pojo.NumberSort;
import com.brain.Pojo.User;
import com.brain.service.FruitSortService;
import com.brain.service.NumberSortService;

public class SaveFruitServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public SaveFruitServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 *说明
	 * 保存水果排序游戏数据返回今日平均
	 * 返回中code属性1为正确0为错误,avg属性为返回的用户当天平均的点击时间
	 * 
	 * 前台数据clickTime,返回对象中属性avg，code
	 * 
	 * url:servlet/SaveFruitServlet
	 * 
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//返回的Json对象
		JSONObject jb = new JSONObject();
		int clickTime = Integer.parseInt(request.getParameter("clickTime"));
		FruitSort fruitSort = new FruitSort();
		//通过session获得当前登录用户的信息
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("loginuser");
		fruitSort.setId(user.getId());
		fruitSort.setClickTime(clickTime);
		FruitSortService fruitSortService = new FruitSortService();
		if(fruitSortService.saveFruitSortTime(fruitSort)){
			jb.put("avg", fruitSortService.getAvg(user.getId()));
			jb.put("code", 1);
		}else{
			jb.put("code", 0);
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
