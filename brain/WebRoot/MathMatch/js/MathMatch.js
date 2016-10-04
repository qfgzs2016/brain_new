// JavaScript Document
	
	var times=0;//轮数
	var difficulty=10;//难度
	
	var frequency=0;
	var score=0;
	var leftValue;
	var rightValue
	var sumScore=document.getElementById('score');
		sumScore.innerHTML=score;
	var sumTimes=document.getElementById('times');
		sumTimes.innerHTML=times;
	function produceTwo(){
		var flag;
		var firstValue;
		var secondValue;
		if(times<=5){
			flag=Math.floor(Math.random()*8)+9;
		}
		else{
			flag=Math.floor(Math.random()*16)+1;
		}
		
		if(flag<=8){//出现两位计算
			if(flag<=4){//左边出现两位
				if(flag==1){//加法
					difficulty=20;
					firstValue=Math.floor(Math.random()*50)+1;
					secondValue=Math.floor(Math.random()*50)+1;
					document.getElementById('content_left_text').innerHTML=firstValue+'+'+secondValue;
					leftValue=firstValue+secondValue;
				}
				else if(flag==2){//减法
					difficulty=20;
					firstValue=2;
					secondValue=3;
					while(firstValue<secondValue){
						firstValue=Math.floor(Math.random()*50)+1;
						secondValue=Math.floor(Math.random()*10)+1;
					}
					document.getElementById('content_left_text').innerHTML=firstValue+'-'+secondValue;
					leftValue=firstValue-secondValue;
				}
				else if(flag==3){//乘法
					difficulty=30;
					firstValue=Math.floor(Math.random()*10)+1;
					secondValue=Math.floor(Math.random()*10)+1;
					document.getElementById('content_left_text').innerHTML=firstValue+'*'+secondValue;
					leftValue=firstValue*secondValue;
				}
				else if(flag==4){//除法
					difficulty=30;
					firstValue=2;
					secondValue=3;
					while(firstValue%secondValue!=0){
						firstValue=Math.floor(Math.random()*49)+1;
						secondValue=Math.floor(Math.random()*10)+1;
					}
					document.getElementById('content_left_text').innerHTML=firstValue+'/'+secondValue;
					leftValue=firstValue/secondValue;
				}
				
				rightValue=Math.floor(Math.random()*100)+1;
				document.getElementById('content_right_text').innerHTML=rightValue;
				
			}
			else{//右边出现两位
				if(flag==5){//加法
					difficulty=20;
					firstValue=Math.floor(Math.random()*50)+1;
					secondValue=Math.floor(Math.random()*50)+1;
					document.getElementById('content_right_text').innerHTML=firstValue+'+'+secondValue;
					rightValue=firstValue+secondValue;
				}
				else if(flag==6){//减法
					difficulty=20;
					firstValue=2;
					secondValue=3;
					while(firstValue<secondValue){
						firstValue=Math.floor(Math.random()*50)+1;
						leftValue2=Math.floor(Math.random()*10)+1;
						console.log(firstValue);		
					}
					document.getElementById('content_right_text').innerHTML=firstValue+'-'+secondValue;
					rightValue=firstValue-secondValue;
				}
				else if(flag==7){//乘法
					difficulty=30;
					firstValue=Math.floor(Math.random()*10)+1;
					secondValue=Math.floor(Math.random()*10)+1;
					document.getElementById('content_right_text').innerHTML=firstValue+'*'+secondValue;	
					rightValue=firstValue*secondValue;
				}
				else if(flag==8){//除法
					difficulty=30;
					firstValue=2;
					secondValue=3;
					while(firstValue%secondValue!=0){
						firstValue=Math.floor(Math.random()*49)+1;
						leftValue2=Math.floor(Math.random()*10)+1;
					}
					document.getElementById('content_right_text').innerHTML=firstValue+'/'+secondValue;
					rightValue=firstValue/secondValue;
				}
				leftValue=Math.floor(Math.random()*100)+1;
				document.getElementById('content_left_text').innerHTML=leftValue;
				
			}
		}
		else{
			difficulty=10;
			leftValue=Math.floor(Math.random()*100)+1;
			rightValue=Math.floor(Math.random()*100)+1;
			document.getElementById('content_left_text').innerHTML=leftValue;
			document.getElementById('content_right_text').innerHTML=rightValue;
		}
		
		if(times==15){
			//****************************************插入ajax****************************
			$.ajax({
				url: "servlet/SaveMathMatch",
				type: "POST",
				data: { score: score},
				dataType: "json",
				success: function (result) {            	
					if (result.code == 1) {//跳转到显示游戏结束结果页面
						alert("此局结束！！！ 确定，进入下一局");
					}
					 else{//再玩一次，，正常情况不能出现
					}
				}
			 
	  		})
				
			
			times=0;
			frequency=0;
			score=0;
			sumScore.innerHTML=0;
			sumTimes.innerHTML=times;
			secondTime=-1;
			
			
			
		}
	}
	function compare(){
		changeTime();
		produceTwo();
		document.getElementById('more').onclick=function(){
			if(leftValue>rightValue){
				score+=difficulty;	
			}
			else{
				score-=difficulty;
			}
			times++;
			sumTimes.innerHTML=times;
			sumScore.innerHTML=score;
			frequency++;
			produceTwo();
		}
		
		document.getElementById('less').onclick=function(){
			if(leftValue<rightValue){
				score+=difficulty;	
				
			}
			else{
				score-=difficulty;
			}
			times++;
			sumTimes.innerHTML=times;
			sumScore.innerHTML=score;
			frequency++;
			produceTwo();
		}
		
	}
	addLoadEvent(compare);
	
	var timer;
	var secondTime=-1;
	function changeTime()
	{
		secondTime++;
		document.getElementById('second').innerHTML=secondTime;	
			timer = setTimeout("changeTime();",1000);//调用自身实现
		return secondTime;
	}//计时器