// JavaScript Document
	var link="/brain/MathMatch/MathMatch.jsp";
	var times=15;//轮数
	var difficulty=10;//难度
	
	var frequency=0;
	var score=0;
	var leftValue;
	var rightValue

	var strategies={
		nums:[],
		firstValue:0,
		secondValue:0,
		
		"add":function(){
			do{
				this.firstValue=Math.floor(Math.random()*50)+1;
				this.secondValue=Math.floor(Math.random()*50)+1;
			}while(this.firstValue+this.secondValue<=20);
			
			this.nums.push(this.firstValue);
			this.nums.push("+");
			this.nums.push(this.secondValue);
			
			return this.nums;
		},
		"sub":function(){
			do{
				this.firstValue=Math.floor(Math.random()*50)+1;
				this.secondValue=Math.floor(Math.random()*50)+1;
			}while(this.firstValue<=this.secondValue+5 || this.firstValue>=this.secondValue+20);
			this.nums.push(this.firstValue);
			this.nums.push("-");
			this.nums.push(this.secondValue);
			
			return this.nums;
		},
		"mul":function(){
			do{
				this.firstValue=Math.floor(Math.random()*9)+2;
				this.secondValue=Math.floor(Math.random()*9)+2;
			}while(this.firstValue*this.secondValue<=12);
			this.nums.push(this.firstValue);
			this.nums.push("*");
			this.nums.push(this.secondValue);
			
			return this.nums;
		},
		"div":function(){
			do{
				this.firstValue=Math.floor(Math.random()*60)+1;
				this.secondValue=Math.floor(Math.random()*59)+2;
			}while(this.firstValue%this.secondValue!=0);
			this.nums.push(this.firstValue);
			this.nums.push("/");
			this.nums.push(this.secondValue);
			
			return this.nums;
			
		},
		getResult:function(){
			if(this.nums[1]=="+"){
				return this.nums[0]+this.nums[2];
			}
			else if(this.nums[1]=="-"){
				return this.nums[0]-this.nums[2];
			}
			else if(this.nums[1]=="*"){
				return this.nums[0]*this.nums[2];
			}
			else if(this.nums[1]=="/"){
				return this.nums[0]/this.nums[2];
			}
			else{
				console.log("没有这样的运算符。");
			}
		}
		
	}
	
	function produceTwo(){
		if(times>=1){
			times--;
			document.getElementById('times').innerHTML=times;
		}
		
		var which=["add","sub","mul","div"];
		do{
			flag=Math.floor(Math.random()*4);
			flag2=Math.floor(Math.random()*4);
			var result=strategies[which[flag]]();
			leftValue=strategies.getResult();
			var resultStr=result[0]+result[1]+result[2];
			result.length=0;
			
			var result2=strategies[which[flag2]]();
			var resultStr2=result2[0]+result2[1]+result2[2];
			rightValue=strategies.getResult();
			result2.length=0;
			
		}while(leftValue-rightValue>10 || leftValue-rightValue<-10 || leftValue==rightValue);
		
		document.getElementById('content_left_text').innerHTML=resultStr;
		document.getElementById('content_right_text').innerHTML=resultStr2;
		
		if(times==0){
			submitDate();
			createPrompt();	
			if(timer){
				clearTimeout(timer);
			}
			//createtips("结束啦！！！",'content_bg',tipsAction);
		}
		
	}
	function submitDate(){
		$.ajax({
			url: "servlet/SaveMathMatch",
			type: "POST",
			data: { score: score},
			dataType: "json",
			success: function (result) {            	
				if (result.code == 1) {//跳转到显示游戏结束结果页面
					$("#avrScoreID").html(result.avg.toFixed(2));
					//alert("此局结束！！！ 确定，进入下一局");
				}
				 else{//再玩一次，，正常情况不能出现
				}
			}
		 
  		})
	}
	function tipsAction(){}
	function dataDistance(firstValue,secondValue,a,b){
		while(firstValue-secondValue>=5){
			firstValue=Math.floor(Math.random()*a)+1;
			secondValue=Math.floor(Math.random()*b)+1;
		}
	}
	
	function addScore(){
		if(secondTime<=3){
			score+=40;
		}
		else if(secondTime>3 && secondTime<=5){
			score+=30;
		}
		else if(secondTime>5 && secondTime<=10){
			score+=30;
		}
		else{
			score+=10;
		}
		document.getElementById('score').innerHTML=score;
	}
	function action(){
		
		produceTwo();
		
		document.getElementById('more_button').onclick=function(){
			secondTime=0;
			document.getElementById('second').innerHTML=secondTime;
			if(leftValue>rightValue){
				addScore();
				isRight(isRightID);
			}
			else{
				isWrong(isRightID);
			}
				
			
			frequency++;
			produceTwo();
			
		}
		
		document.getElementById('less_button').onclick=function(){
			secondTime=0;
			document.getElementById('second').innerHTML=secondTime;
			if(leftValue<rightValue){
				addScore();
				isRight(isRightID);
				
			}
			else{
				isWrong(isRightID);
			}
				
			
			frequency++;
			produceTwo();
			
		}
		secondTime=0;
		document.getElementById('second').innerHTML=secondTime;
	}
	function init(){
		
		score=0;
		document.getElementById('score').innerHTML=score;
		document.getElementById('times').innerHTML=times;
		secondTime=-1;
		document.getElementById('second').innerHTML=0;
		document.getElementById('content_left_text').innerHTML="X";
		document.getElementById('content_right_text').innerHTML="X";
		document.getElementById('start').style.display='inline';
		document.getElementById('again').style.display='none';
		frequency=0;
		if(timer){
			clearTimeout(timer);
		}
	}
	addLoadEvent(init);
	
	var timer;
	var secondTime;
	function changeTime()
	{
		secondTime++;
		document.getElementById('second').innerHTML=secondTime;	
			timer = setTimeout("changeTime();",1000);//调用自身实现
		return secondTime;
	}//计时器
	
	document.getElementById('start').onclick=function(){
		document.getElementById('again').style.display='inline';
		document.getElementById('start').style.display='none';
		
		changeTime();
		action();
	}
	document.getElementById('again').onclick=function(){
		/*document.getElementById('again').style.display='none';
		document.getElementById('start').style.display='inline';
		changeTime();
		action();*/
		window.location.reload();
	}