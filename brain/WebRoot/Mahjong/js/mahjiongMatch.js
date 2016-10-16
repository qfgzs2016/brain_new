// JavaScript Document
var score=0;
var secondTime=46;
function init(){
	score=0;
	secondTime=46;
	timeFlag=true;
	document.getElementById('startBtn').style.display='inline';	
	document.getElementById('sameBtn').style.display='none';	
	var ss=document.getElementById('differenceBtn').style.display='none';
	drawMahjong();
	if(!document.getElementById('rightFontID')){
		var gou=document.createElement('span');
		gou.setAttribute('id','rightFontID');
		gou.setAttribute('class','right');
		gou.innerHTML='√';
		var whiteBoard=document.getElementById('whiteId')
		whiteBoard.appendChild(gou);
		gou.style.display="none";
	}
	if(!document.getElementById('wrongID')){
		var wrong=document.createElement('span');
		wrong.setAttribute('id','wrongID');
		wrong.setAttribute('class','wrong');
		wrong.innerHTML='×';
		var whiteBoard=document.getElementById('whiteId')
		whiteBoard.appendChild(wrong);
		wrong.style.display="none";
	}

}
addLoadEvent(init);

function action(){
}

document.getElementById('startBtn').onclick=function(){	
		document.getElementById('sameBtn').style.display='inline';	
		document.getElementById('differenceBtn').style.display='inline';
		document.getElementById('startBtn').style.display='none';
		console.log(document.getElementById('topPicID'));
		document.getElementById('topPicID').className="topPicLast";
		document.getElementById('leftPicID').className="leftPicLast";
		document.getElementById('rightPicID').className="rightPicLast";
		changeTime();	
		action();	
		drawMahjong();		
}

document.getElementById('differenceBtn').onclick=function(){
	if(now!=last){
		if(document.getElementById('rightFontID')){
			document.getElementById('rightFontID').style.display="inline";
			setTimeout("document.getElementById('rightFontID').style.display='none';",100);
		}
		score+=10;
	}
	else{
		if(document.getElementById('wrongID')){
			document.getElementById('wrongID').style.display="inline";
			setTimeout("document.getElementById('wrongID').style.display='none';",100);
		}
		score-=10;
	}
	document.getElementById('score').innerHTML=score;
	drawMahjong();	
}

document.getElementById('sameBtn').onclick=function(){
	if(now==last){
		if(document.getElementById('rightFontID')){
			document.getElementById('rightFontID').style.display="inline";
			setTimeout("document.getElementById('rightFontID').style.display='none';",100);
		}
		score+=10;
	}
	else{
		if(document.getElementById('wrongID')){
			document.getElementById('wrongID').style.display="inline";
			setTimeout("document.getElementById('wrongID').style.display='none';",100);
		}
		score-=10;	
	}
	document.getElementById('score').innerHTML=score;
	drawMahjong();	
}
var now;
var last;
function drawMahjong(){
	last=now;
	now=Math.floor(Math.random()*3);
	if(now==0){
		 produceTong(10,"topPicCla","topPicID");
		 produceTong(13,"leftPicCla","leftPicID");
		 produceTong(13,"rightPicCla","rightPicID");
	}
	else if(now==1){
		 produceTong(13,"topPicCla","topPicID");
		 produceTong(11,"leftPicCla","leftPicID");
		 produceTong(13,"rightPicCla","rightPicID");		
	}
	else{
		 produceTong(13,"topPicCla","topPicID");
		 produceTong(13,"leftPicCla","leftPicID");
		 produceTong(12,"rightPicCla","rightPicID");		
	}	
}
function produceTong(n,className,picID){
	var tong=document.createElement('img');
	tong.setAttribute('class','majio '+className+'');
	tong.setAttribute('id',picID);
	tong.src="Mahjong/image/"+n+".png"
	document.getElementById('whiteId').appendChild(tong);
}
var timer;
	function changeTime()//计时器
	{
		secondTime--;
		document.getElementById('second').innerHTML=secondTime;
		if(secondTime>=1){
			timer = setTimeout("changeTime();",1000);//调用自身实现
		}
		else{
			clearInterval(timer);
			
			$.ajax({
				url: "servlet/SaveMahjongServlet",
				type: "POST",
				data: { score: score},
				dataType: "json",
				success: function (result) {            	
					if (result.code == 1) {//跳转到显示游戏结束结果页面
						$(".mahjong-score").html(result.avg.toFixed(2));
						//document.getElementByClass("mahjong-score").innerHTML = mahjongscore.toFixed(2);
					}
					 else{//再玩一次，，正常情况不能出现
					}
				}
			 
	  		})
			
			createPrompt();
			document.getElementById('sameBtn').style.display='none';
			document.getElementById('differenceBtn').style.display='none';
			/*document.getElementById('again').style.display='inline';*/
			
		}
		return secondTime;
	}
var helpMask = document.createElement("div");;
var inne;
document.getElementById('help').onclick=function(){
	if ( !document.getElementById("startBtnID") && 1){
		 var startBtn = document.createElement("Buttom");
		 startBtn.setAttribute("id", "startBtnID");
         startBtn.setAttribute("class", "start btnStyle");
		 startBtn.innerHTML = "开始";
		 startBtn.onclick=function(){
			 init();
			 helpMask.style.display="none";
		 }
	}
	else{
		helpMask.style.display="inline";
	}
	if ( !document.getElementById("helpmaskID") && 1)
    {      
		inne = '<div class="gameHelp">';
		inne += ' <p class="gameHelp_title">游戏玩法</p>';
		inne += ' <p class="gameHelp_text">';
		inne += '麻将上会出现一组符号，其中一个为蓝色，请记住它的位置，并在下一组符号出现时判断是否与其相同。';
		inne += '</p>';
    	inne += '</div>';
        var fs_wrapper=document.getElementById('fs_wrapper');   
        helpMask.id = "helpmaskID";
		helpMask.class = "helpmaskClass";
		helpMask.style.textAlign="center";
        helpMask.style.position = "absolute";
        helpMask.style.zIndex = "2";
        helpMask.style.width =parseInt(fs_wrapper.offsetWidth )+'px';
        helpMask.style.height =parseInt(fs_wrapper.offsetHeight )+'px';
        helpMask.style.top =fs_wrapper.offsetTop+'px';
        helpMask.style.left =fs_wrapper.offsetLeft+'px';
        helpMask.style.background = "gray";
        helpMask.style.filter = "alpha(opacity=80)";
        helpMask.style.opacity = "1";
	   helpMask.innerHTML = inne;
	   helpMask.appendChild(startBtn);
       document.body.appendChild(helpMask);      
    }
	
}
var timeFlag=true;
var nowTime;
	document.getElementById('voice').onclick=function(){
		if(timeFlag){	
			timeFlag=false;
			this.src="Mahjong/image/299-volume-mute2.png";
		}
		else{
			timeFlag=true;
			this.src="Mahjong/image/296-volume-medium.png";		
		}
	}
	
	document.getElementById('off').onclick = function(){
		if(timer){
			if(timeFlag){	
				timeFlag=false;
				this.src="Mahjong/image/285-play3.png";
				nowTime=secondTime;	
				clearInterval(timer);
			}
			else{
				timeFlag=true;
				secondTime=nowTime+1;
				changeTime();
				this.src="Mahjong/image/286-pause2.png";		
			}
		}
	}

var voiceFlag=true;
