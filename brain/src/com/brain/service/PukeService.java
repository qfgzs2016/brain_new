package com.brain.service;

import com.brain.Dao.GoDao;
import com.brain.Dao.PukeDao;
import com.brain.Pojo.Go;
import com.brain.Pojo.Puke;

public class PukeService {
	PukeDao pukeDao = new PukeDao();
	

	public boolean savePukeScore(Puke puke) {
		if(pukeDao.Insert(puke)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return pukeDao.queryAvg(id);
	}
}
