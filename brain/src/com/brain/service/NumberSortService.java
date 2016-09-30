package com.brain.service;

import com.brain.Dao.NumberSortDao;
import com.brain.Pojo.Mahjong;
import com.brain.Pojo.NumberSort;

public class NumberSortService {
	
	NumberSortDao numberSortDao = new NumberSortDao();
	
	public boolean saveNumberSortTime(NumberSort numberSort) {
		if(numberSortDao.Insert(numberSort)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return numberSortDao.queryAvg(id);
	}
}
