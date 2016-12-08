// JavaScript Document
var link="/brain/Mahjong/Mahjong.jsp";
var diffBtn=document.getElementById('diffBtnID');
var sameBtn=document.getElementById('sameBtnID');
var whiteBoard=document.getElementById('whiteId')
var score=0;
var secondTime=46;
function init(){
	score=0;
	document.getElementById('score').innerHTML=score;
	secondTime=46;
	timeFlag=true;
	document.getElementById('startBtn').style.display='inline';	
	document.getElementById('sameBtnID').style.display='none';	
	var ss=document.getElementById('diffBtnID').style.display='none';
	drawMahjong();

}
addLoadEvent(init);

function action(){
}

document.getElementById('startBtn').onclick=function(){	//startBtn
		document.getElementById('sameBtnID').style.display='inline';	
		document.getElementById('diffBtnID').style.display='inline';
		document.getElementById('startBtn').style.display='none';
		document.getElementById('tips').style.display='none';
		
		document.getElementById('topPicID').className="topPicLast";
		document.getElementById('leftPicID').className="leftPicLast";
		document.getElementById('rightPicID').className="rightPicLast";
		changeTime();	
		action();	
		drawMahjong();	
		offPic.src="img/286-pause2.png";
		timeFlag=true;
		isPause();
}

document.getElementById('diffBtnID').onclick=function(){//diffBtnID
	if(now!=last){
		isRight(isRightID);
		score+=10;
	}
	else{
		isWrong(isRightID);	
		if(score>=10){
			score-=10;//分数容易太高修改
		}
	}
	document.getElementById('topPicID').className="topPicLast";
	document.getElementById('leftPicID').className="leftPicLast";
	document.getElementById('rightPicID').className="rightPicLast";
	document.getElementById('score').innerHTML=score;
	setTimeout("drawMahjong(whiteBoard);",150);
	
}

document.getElementById('sameBtnID').onclick=function(){//sameBtnID
	if(now==last){
		isRight(isRightID);
		score+=10;
	}
	else{
		isWrong(isRightID);
		if(score>=10){
			score-=10;//分数容易太高修改
		}
		
		
	}
	document.getElementById('topPicID').className="topPicLast";
	document.getElementById('leftPicID').className="leftPicLast";
	document.getElementById('rightPicID').className="rightPicLast";
	document.getElementById('score').innerHTML=score;
	setTimeout("drawMahjong(whiteBoard);",150);
}
var now;
var last;
function drawMahjong(){
	last=now;
	while(whiteBoard.hasChildNodes()){
		whiteBoard.removeChild(whiteBoard.firstChild);
	}
	if(0.5-Math.random()<0){
		now=last;
	}
	else{
		do{
			now=Math.floor(Math.random()*3);
		}while(now==last);
	}
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

var helpMask = document.createElement("div");;
var inne;
document.getElementById('help').onclick=function(){
	clearInterval(timer);
	if ( !document.getElementById("startBtnID02") && 1){
		 var startBtn02 = document.createElement("Buttom");
		 startBtn02.setAttribute("id", "startBtnID02");
         startBtn02.setAttribute("class", "startBtnCla btnStyle");
		 startBtn02.innerHTML = "开始";
		 startBtn02.onclick=function(){
			init();
			score=0;
			document.getElementById('score').innerHTML=score;
			document.getElementById('second').innerHTML="45";
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
		inne += '游戏开始前麻将牌上会出现一组符号，请记住筒的颜色，并在下一组符号出现时判断是否与其相同。';
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
	   helpMask.appendChild(startBtn02);
       document.body.appendChild(helpMask);      
    }
	
}


function submitDate(){
	$.ajax({
		url: "servlet/SaveMahjongServlet",
		type: "POST",
		data: { score: score},
		dataType: "json",
		success: function (result) {            	
			if (result.code == 1) {//跳转到显示游戏结束结果页面
				$("#avrScoreID").html(result.avg.toFixed(2));
				//document.getElementByClass("mahjong-score").innerHTML = mahjongscore.toFixed(2);
			}
			 else{//再玩一次，，正常情况不能出现
			}
		}
	 
		})
}
function isPause(){
	if(timeFlag){
		diffBtn.disabled=false;
		sameBtn.disabled=false;
		
	}
	else{
		diffBtn.disabled=true;
		sameBtn.disabled=true;
	}	
}

