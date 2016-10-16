// JavaScript Document
var link="PukeMatch/PukeMatch.jsp";
var score=0;
var secondTime=46;
function init(){
	score=0;
	secondTime=46;
	timeFlag=true;
	document.getElementById('startBtn').style.display='inline';	
	document.getElementById('sameBtn').style.display='none';	
	var ss=document.getElementById('differenceBtn').style.display='none';
	drawPuke();
	if(!document.getElementById('rightFontID')){
		var gou=document.createElement('span');
		gou.setAttribute('id','rightFontID');
		gou.setAttribute('class','right');
		gou.innerHTML='√';
		var whiteBoard=document.getElementById('pukeid');
		whiteBoard.appendChild(gou);
		gou.style.display="none";
	}
	if(!document.getElementById('wrongID')){
		var wrong=document.createElement('span');
		wrong.setAttribute('id','wrongID');
		wrong.setAttribute('class','wrong');
		wrong.innerHTML='×';
		var whiteBoard=document.getElementById('pukeid');
		whiteBoard.appendChild(wrong);
		wrong.style.display="none";
	}

}
addLoadEvent(init);


document.getElementById('startBtn').onclick=function(){	
		document.getElementById('sameBtn').style.display='inline';	
		document.getElementById('differenceBtn').style.display='inline';
		document.getElementById('startBtn').style.display='none';
		changeTime();	
		drawPuke();		
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
	drawPuke();	
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
	drawPuke();	
}
var now;
var last;
var pk=document.getElementById("pk");
function drawPuke(){
	if(pk.childNodes.length==1){
		pk.removeChild(pk.firstChild);
	}
	else{
		
	}
	/*console.log(pk.childNodes.length);*/
	last=now;
	now=Math.floor(Math.random()*4);
	if(now==0){
		 producePuke(10);
		
	}
	else if(now==1){
		 producePuke(11);
			
	}
	else if(now==2){
		 producePuke(12);
			
	}
	else{
		 producePuke(13);
		
	}	
	/*console.log(pk.childNodes.length);*/
}
function producePuke(n){
	/*var images=['img/10.png','img/11.png','img/12.png','img/13.png'];
	var url=images[Math.floor(Math.random()*images.length)];
	var puke=document.createElement('img');
	puke.setAttribute("src",url);
	document.getElementById('pukeid').appendChild(puke);*/
	var puke=document.createElement('img');
	puke.src="PukeMatch/img/"+n+".png"
	pk.appendChild(puke);
	
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
			url: "servlet/SavePukeServlet",
			type: "POST",
			data: { score: score},
			dataType: "json",
			success: function (result) {            	
				if (result.code == 1) {//跳转到显示游戏结束结果页面
					$(".puke-score").html(result.avg.toFixed(2));
					//document.getElementByClass("puke-score").innerHTML = mahjongscore.toFixed(2);
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
/*var timer;
	function changeTime()//计时器
	{
		secondTime--;
		document.getElementById('second').innerHTML=secondTime;
		if(secondTime>=1){
			timer = setTimeout("changeTime();",1000);//调用自身实现
		}
		else{
			clearInterval(timer);
			createPrompt();
			document.getElementById('sameBtn').style.display='none';
			document.getElementById('differenceBtn').style.display='none';
			document.getElementById('again').style.display='inline';
			
		}
		return secondTime;
	}*/
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
		inne += '会出现一张扑克花色，请记住它的花色，并在下张花色出现时判断是否与其相同。';
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
document.getElementById('off').onclick=function(){
	if(timer){
		if(timeFlag){	
			timeFlag=false;
			this.src="img/285-play3.png";
			nowTime=secondTime;	
			clearInterval(timer);
		}
		else{
			timeFlag=true;
			secondTime=nowTime+1;
			changeTime();
			this.src="img/286-pause2.png";		
		}
	}
}
var voiceFlag=true;
document.getElementById('voice').onclick=function(){
	if(timeFlag){	
		timeFlag=false;
		this.src="img/299-volume-mute2.png";
	}
	else{
		timeFlag=true;
		this.src="img/296-volume-medium.png";		
	}
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  