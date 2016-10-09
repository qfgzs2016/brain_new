package com.brain.service;

import com.brain.Dao.FruitSortDao;
import com.brain.Pojo.FruitSort;

public class FruitSortService {
	FruitSortDao fruitSortDao = new FruitSortDao();
	
	public boolean saveFruitSortTime(FruitSort fruitSort) {
		if(fruitSortDao.Insert(fruitSort)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return fruitSortDao.queryAvg(id);
	}
}
