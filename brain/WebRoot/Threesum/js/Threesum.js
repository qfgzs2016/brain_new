// JavaScript Document

	var times=0;//轮数
	var difficulty=10;//难度
	
	var frequency=0;
	var score=0;
	var res;
	var result;
	var sumScore=document.getElementById('score');
		sumScore.innerHTML=score;
	var Times=document.getElementById('times');
		Times.innerHTML=times;

function produce(){
	var m1 = Math.floor(Math.random()*10);
	var m2 = Math.floor(Math.random()*10);
	var m3 = Math.floor(Math.random()*10);
	document.getElementById("sum").innerHTML=m1+'+'+m2+'+'+m3;
	//res=eval(document.getElementById("sum-res")).value;
	result=m1+m2+m3;
	
	if(times>15){				
			//****************************************插入ajax****************************
			$.ajax({
				url: "servlet/SaveThreeSumServlet",
				type: "POST",
				data: { score: score},
				dataType: "json",
				success: function (result) {            	
					if (result.code == 1) {//跳转到显示游戏结束结果页面
						$(".Threesum-score").html(result.avg.toFixed(2));
					}
					 else{//再玩一次，，正常情况不能出现
					}
				}
			 
	  		})
			
			init();
			
			//alert("此局结束！！！ 确定，进入下一局");
		 
		}
		
	
	
}

function clean()
{
	document.getElementById("sum-res").value="";
}

function compare(){
	
	produce();
	document.getElementById("same").onclick=function(){
		
		res=document.getElementById("sum-res").value;
		//clearTimeout(timer);
		
		if((res)==result){
			if(secondTime<=10){
				score+=20;
			}
			else if(secondTime>10&&secondTime<=20){
				score+=10;
			}
			else if(secondTime>20&&secondTime<=30){
				score+=5;
			}
			else{
				score+=0;
			}
			
		}
		else{
			score+=0;
			
		}
		secondTime=-1;
		document.getElementById('second').innerHTML=0;
		//changeTime();
		times++;
		Times.innerHTML=times;
		sumScore.innerHTML=score;
		frequency++;
		produce();
		clean();
		
	}
	
}
	
	function init(){
		times=0;
		document.getElementById('times').innerHTML=times;	
		score=0;
		document.getElementById('score').innerHTML=score;
		secondTime=-1;
		document.getElementById('second').innerHTML=0;
		document.getElementById('sum').innerHTML=0;
		document.getElementById('sum-res').innerHTML=0;
		document.getElementById('start').style.display='inline';
		document.getElementById('again').style.display='none';
		document.getElementById('same').style.display='none';
		document.getElementById('sum-res').style.display='none';
		frequency=0;
		if(timer){
			clearTimeout(timer);
		}
	}
	addLoadEvent(init);


	
	var timer;
	var secondTime=-1;
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
		document.getElementById('same').style.display='inline';
		document.getElementById('sum-res').style.display='inline';
		times++;
		document.getElementById('times').innerHTML=times;
		changeTime();
		compare();
	}
	document.getElementById('again').onclick=function(){
		/*document.getElementById('again').style.display='none';
		document.getElementById('start').style.display='inline';
		changeTime();
		action();*/
		window.location.reload();
	}
	
	document.onkeydown=keyListener; 
		function keyListener(e){ 
			if(e.keyCode == 13){  
				$("#same").click();
				
			}
		}
	







