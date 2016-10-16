package com.brain.service;

import com.brain.Dao.GoDao;
import com.brain.Dao.ThreeSunDao;
import com.brain.Pojo.Go;
import com.brain.Pojo.ThreeSum;

public class ThreeSumService {
	ThreeSunDao threeSunDao = new ThreeSunDao();
	
	public boolean saveThreeSumScore(ThreeSum threeSum) {
		if(threeSunDao.Insert(threeSum)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return threeSunDao.queryAvg(id);
	}

}
