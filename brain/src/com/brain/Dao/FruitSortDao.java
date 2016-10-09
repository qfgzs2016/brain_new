package com.brain.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

import com.brain.Pojo.FruitSort;
import com.brain.util.UtilJDBC;

public class FruitSortDao implements DAO<FruitSort> {

	Connection con = (Connection) UtilJDBC.getConnection();
	PreparedStatement sql=null; 
	ResultSet rs = null;
	
	@Override
	public boolean Insert(FruitSort fruitsort) {
		try {
			//String sqlString="INSERT INTO t_game_go(user_id,score,createTime,createTimeDate) VALUES(3,800,'2016-9-28 00:00:00',DATE_FORMAT(NOW(),'%Y-%c-%d'))";
			sql = con.prepareStatement("INSERT INTO t_game_fruitsort(user_id,clicktime,createTime) VALUES(?,?,?)");
			sql.setInt(1, fruitsort.getId());
			sql.setInt(2, fruitsort.getClickTime());
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
		
		return false;
	}

	@Override
	public boolean update(int id, FruitSort t) {
		
		return false;
	}

	@Override
	public List<FruitSort> query(String strWhere, String orderby, int pageSize,
			int pageIndex) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public float queryAvg(int id) {
		try {
			sql=con.prepareStatement("select avg(clicktime) avg from t_game_fruitsort where user_id=? and date(createTime)=DATE_FORMAT(NOW(),'%Y-%c-%d') group by date(createTime)");
			sql.setInt(1, id);
			rs=sql.executeQuery();
			if(rs.next()){
				System.out.println(rs.getFloat("avg"));
				return rs.getFloat("avg");
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	}

}
