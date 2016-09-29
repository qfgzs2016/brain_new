package com.brain.service;

import com.brain.Dao.MathMatchDao;
import com.brain.Pojo.MathMatch;

public class MathMatchService {
	MathMatchDao mathMatchDao = new MathMatchDao();
	public boolean saveMathMatchScore(MathMatch mathMatch) {
		if(mathMatchDao.Insert(mathMatch)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return mathMatchDao.queryAvg(id);
	}
}
