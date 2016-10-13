package com.brain.service;

import com.brain.Dao.ColorMatchDao;
import com.brain.Pojo.ColorMatch;


public class ColorMatchService {
	ColorMatchDao colorMatchDao = new ColorMatchDao();
	

	public boolean saveColorScore(ColorMatch colorMatch) {
		if(colorMatchDao.Insert(colorMatch)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return colorMatchDao.queryAvg(id);
	}
}
