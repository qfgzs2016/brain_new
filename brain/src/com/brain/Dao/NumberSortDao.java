package com.brain.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

import com.brain.Pojo.NumberSort;
import com.brain.util.UtilJDBC;



public class NumberSortDao implements DAO<NumberSort>{
	
	Connection con = (Connection) UtilJDBC.getConnection();
	PreparedStatement sql=null; 
	ResultSet rs = null;
	
	/**
	 * 前台插入一条数字排序记录
	 * @param go
	 * @return
	 */
	@Override
	public boolean Insert(NumberSort numberSort) {
		try {
			//String sqlString="INSERT INTO t_game_go(user_id,score,createTime,createTimeDate) VALUES(3,800,'2016-9-28 00:00:00',DATE_FORMAT(NOW(),'%Y-%c-%d'))";
			sql = con.prepareStatement("INSERT INTO t_game_numbersort(user_id,clicktime,createTime) VALUES(?,?,?)");
			sql.setInt(1, numberSort.getId());
			sql.setInt(2, numberSort.getClickTime());
			sql.setTimestamp(3, new Timestamp(System.currentTimeMillis()));
			int num=sql.executeUpdate();
			if(num>0){
				
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		return false;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(int id, NumberSort t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<NumberSort> query(String strWhere, String orderby,
			int pageSize, int pageIndex) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public float queryAvg(int id) {
		try {
			sql=con.prepareStatement("select avg(clicktime) avg from t_game_numbersort where user_id=? and date(createTime)=DATE_FORMAT(NOW(),'%Y-%c-%d') group by date(createTime)");
			sql.setInt(1, id);
			rs=sql.executeQuery();
			if(rs.next()){
				return rs.getFloat("avg");
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	}
	

}
