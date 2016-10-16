package com.brain.service;

import com.brain.Dao.MoonLandDao;
import com.brain.Pojo.Moonland;

public class MoonLandService {

	MoonLandDao moonLandDao = new MoonLandDao();
	
	public boolean saveMoonlandScore(Moonland moonland) {
		if(moonLandDao.Insert(moonland)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return moonLandDao.queryAvg(id);
	}

}
