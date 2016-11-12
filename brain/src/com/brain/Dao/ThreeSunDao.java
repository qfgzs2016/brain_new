package com.brain.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

import com.brain.Pojo.ThreeSum;
import com.brain.util.UtilJDBC;

public class ThreeSunDao implements DAO<ThreeSum> {
	Connection con = (Connection) UtilJDBC.getConnection();
	PreparedStatement sql=null; 
	ResultSet rs = null;
	@Override
	public boolean Insert(ThreeSum threeSum) {
		try {
			sql = con.prepareStatement("INSERT INTO t_game_threesum(user_id,score,createTime) VALUES(?,?,?)");
			sql.setInt(1, threeSum.getId());
			sql.setInt(2, threeSum.getScore());
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
	public boolean update(int id, ThreeSum threeSum) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<ThreeSum> query(String strWhere, String orderby, int pageSize,
			int pageIndex) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public float queryAvg(int id) {
		
		try {
			sql=con.prepareStatement("select avg(score) avg from t_game_threesum where user_id=? and date(createTime)=DATE_FORMAT(NOW(),'%Y-%c-%d') group by date(createTime)");
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
