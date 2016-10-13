package com.brain.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

import com.brain.Pojo.ColorMatch;
import com.brain.util.UtilJDBC;

public class ColorMatchDao implements DAO<ColorMatch> {
	Connection con = (Connection) UtilJDBC.getConnection();
	PreparedStatement sql=null; 
	ResultSet rs = null;

	@Override
	public boolean Insert(ColorMatch colorMatch) {
		try {
			
			sql = con.prepareStatement("INSERT INTO t_game_colormatch(user_id,score,createTime) VALUES(?,?,?)");
			sql.setInt(1, colorMatch.getId());
			sql.setInt(2, colorMatch.getScore());
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
	public boolean update(int id, ColorMatch colorMatch) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<ColorMatch> query(String strWhere, String orderby, int pageSize,
			int pageIndex) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public float queryAvg(int id) {

		try {
			sql=con.prepareStatement("select avg(score) avg from t_game_colormatch where user_id=? and date(createTime)=DATE_FORMAT(NOW(),'%Y-%c-%d') group by date(createTime)");
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
