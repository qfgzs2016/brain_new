package com.brain.Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.brain.Dao.NumberSortDao;
import com.brain.Pojo.MathMatch;
import com.brain.Pojo.NumberSort;
import com.brain.Pojo.User;
import com.brain.service.MathMatchService;
import com.brain.service.NumberSortService;

public class SaveNumberSortServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public SaveNumberSortServlet() {
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
	 * 
	 * 说明
	 * 保存数字pk游戏数据返回今日平均
	 * 返回中code属性1为正确0为错误,avg属性为返回的用户当天平均的点击时间
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JSONObject jb = new JSONObject();
		int clickTime = Integer.parseInt(request.getParameter("clickTime"));
		NumberSort numberSort = new NumberSort();
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("loginuser");
		numberSort.setId(user.getId());
		numberSort.setClickTime(clickTime);
		NumberSortService numberSortService = new NumberSortService();
		if(numberSortService.saveNumberSortTime(numberSort)){
			jb.put("avg", numberSortService.getAvg(user.getId()));
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
