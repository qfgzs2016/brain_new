package com.brain.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

import com.brain.Pojo.MathMatch;
import com.brain.util.UtilJDBC;

public class MathMatchDao implements DAO<MathMatch> {
	Connection con = (Connection) UtilJDBC.getConnection();
	PreparedStatement sql=null; 
	ResultSet rs = null;
	
	/**
	 * 前台插入一条数字PK记录
	 * @param go
	 * @return
	 */
	@Override
	public boolean Insert(MathMatch mathMatch) {
		try {
			//String sqlString="INSERT INTO t_game_go(user_id,score,createTime,createTimeDate) VALUES(3,800,'2016-9-28 00:00:00',DATE_FORMAT(NOW(),'%Y-%c-%d'))";
			sql = con.prepareStatement("INSERT INTO t_game_mathmatch(user_id,score,createTime,createTimeDate) VALUES(?,?,?,DATE_FORMAT(NOW(),'%Y-%c-%d'))");
			sql.setInt(1,mathMatch.getId());
			sql.setInt(2,mathMatch.getScore());
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
	public float queryAvg(int id) {
		try {
			sql=con.prepareStatement("select avg(score) avg from t_game_mathmatch where user_id=? and createTimeDate=DATE_FORMAT(NOW(),'%Y-%c-%d') group by createTimeDate");
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

	@Override
	public boolean update(int id, MathMatch t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<MathMatch> query(String strWhere, String orderby, int pageSize,
			int pageIndex) {
		// TODO Auto-generated method stub
		return null;
	}

}
