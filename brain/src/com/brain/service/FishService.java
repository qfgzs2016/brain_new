package com.brain.service;


import com.brain.Dao.FishDao;
import com.brain.Pojo.Fish;

public class FishService {
	
	FishDao fishDao = new FishDao();

	public boolean saveFishScore(Fish fish) {
		if(fishDao.Insert(fish)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return fishDao.queryAvg(id);
	}
}
