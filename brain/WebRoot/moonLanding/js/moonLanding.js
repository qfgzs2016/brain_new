// JavaScript Document
var radius=25;
var humanWidth=50;
var ctx;
var perDis=30;
var score;
var disRd;
var moon_canvas=document.getElementById('fs_wrapper');
var startBtnDiv=document.getElementById('startBtnDivID');
var getScoreDiv=document.getElementById('getScoreDivID');
var widthCav;
var heightCav;
var link="/brain/moonLanding/moonLanding.jsp";

var fs_wrapper=document.getElementById('fs_wrapper'); 
helpInfo = '<div class="gameHelp">';
helpInfo += ' <p class="gameHelp_title">游戏玩法</p>';
helpInfo += ' <p class="gameHelp_text">';
helpInfo += '目测宇航员与其下方安全绿色区域的距离，并选择点击最接近的按钮';
helpInfo += '</p>';
helpInfo += '</div>';

function space(hx, hy, hfillstyle) {
    this.hx = hx;
    this.hy = hy;
    this.hfillstyle = hfillstyle;
    this.draw = drawspace;

}

function board(bx, by, bwidth, bheight, bfillstyle) {
    this.bx = bx;
    this.by = by;
    this.bwidth = bwidth;
    this.bheight = bheight;
    this.bfillstyle = bfillstyle;
    this.draw = drawBoard;
}
function drawBoard() {
    ctx.fillStyle = this.bfillstyle;
    ctx.fillRect(this.bx, this.by, this.bwidth, this.bheight);
    ctx.fill();
}

function drawHuman(x,y){
	var image=new Image();
	 image.src="moonLanding/img/astronaut.png";
	 image.onload=function(){
	 	ctx.drawImage(image,x,y);
	 }	
}
function drawLand(x,y){
	var image=new Image();
	 image.src="moonLanding/img/land01.png";
	 image.onload=function(){
	 	ctx.drawImage(image,x,y);
	 }	
}
function drawStaff(x,y,w,h){
	var image=new Image();
	 image.src="moonLanding/img/staff.png";
	 image.onload=function(){
	 	ctx.drawImage(image,x,y,w,h*2);
	 }	
}
function init(){
	score=0;
	secondTime=46;
	isPause();
	/*offPic.src="img/285-play3.png";*/
	ctx = document.getElementById('moon_canvas').getContext('2d');	
	drawStaff(20,500,30,perDis);
	produceBtn();
	startBtnDiv.appendChild(startBtn);
	
}
function action(){
	changeTime();
	produce();
	
}
addLoadEvent(init);

function produce(){
	drawStaff(20,500,30,perDis);
	widthCav=parseInt(moon_canvas.offsetWidth );
    heightCav=parseInt(moon_canvas.offsetHeight);
	ctx.clearRect(0,0,widthCav,600);
	widthCav=widthCav*0.8;
	var humanxRd = Math.floor(Math.random()*widthCav)+10;	
	var humanyRd = Math.floor(Math.random()*200)+30;	
	disRd= Math.floor(Math.random()*6)+1;	
	drawHuman(humanxRd,humanyRd);
	var landH=humanyRd+disRd*perDis;
	var landW=humanxRd;
	drawLand(landW,landH);//369 227
}
document.getElementById('1').onclick=function(){
	if(disRd==1){
		getScore(getScoreDiv,5);
		score+=5;		
	}
	
	produce();
	
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('2').onclick=function(){
	if(disRd==2){
		getScore(getScoreDiv,10);
		score+=10;		
	}
	produce();
	
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('3').onclick=function(){
	if(disRd==3){
		getScore(getScoreDiv,10);
		score+=10;		
	}
	produce();
	
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('4').onclick=function(){
	if(disRd==4){
		getScore(getScoreDiv,20);
		score+=20;		
	}
	produce();
	
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('5').onclick=function(){
	if(disRd==5){
		getScore(getScoreDiv,20);
		score+=20;		
	}
	produce();
	
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('6').onclick=function(){
	if(disRd==6){
		getScore(getScoreDiv,20);
		score+=20;		
	}
	produce();
	
	document.getElementById('score').innerHTML=score;	
}

	document.getElementById('help').onclick=function(){
		produceMask(helpInfo,fs_wrapper)
		
	}
	
	
/*document.getElementById('off').onclick=isPause;*/
function isPause(){
	
	if(timeFlag){	
		document.getElementById("1").disabled=false;
		document.getElementById("2").disabled=false;
		document.getElementById("3").disabled=false;
		document.getElementById("4").disabled=false;
		document.getElementById("5").disabled=false;
		document.getElementById("6").disabled=false;
	}
	else{
		document.getElementById("1").disabled=true;
		document.getElementById("2").disabled=true;
		document.getElementById("3").disabled=true;
		document.getElementById("4").disabled=true;
		document.getElementById("5").disabled=true;
		document.getElementById("6").disabled=true;
	}	
}

function submitDate(){
	$.ajax({
		url: "servlet/SaveMoonLandServlet",
		type: "POST",
		data: { score: score},
		dataType: "json",
		success: function (result) {            	
			if (result.code == 1) {//跳转到显示游戏结束结果页面
				$("#avrScoreID").html(result.avg.toFixed(2));
				
				//document.getElementByClass("colorMatch-score").innerHTML = mahjongscore.toFixed(2);
			}
			 else{//再玩一次，，正常情况不能出现
			}
		}
	 
	})
}

var startBtn;
function produceBtn(){
	if ( !document.getElementById("startBtnID") && 1){
			startBtn= document.createElement("Buttom");
			startBtn.setAttribute("id", "startBtnID");
	    	startBtn.setAttribute("class", "startBtnCla btnStyle");
	    	startBtn.innerHTML = "开始";
	    	startBtn.style.position = "absolute";
	    	startBtn.style.top="65%";
	    	startBtn.style.left="43%";
		 	startBtn.onclick=function(){
		 		startBtn.style.display="none";
		 		timeFlag=true;
		 		offPic.src="img/286-pause2.png";
		 		isPause();
		 		action(); 
		 		/*timeFlag=false;
		 				
		 		
		 		
		 		startBtn.style.display="none";*/
		 }
	}
}











