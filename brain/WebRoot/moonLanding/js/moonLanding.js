// JavaScript Document
var radius=25;
var humanWidth=50;
var ctx;
var perDis=60;
var score;
var disRd;
var moon_canvas=document.getElementById('fs_wrapper');
var widthCav;
var heightCav;
var link="mooonLanding.html";
function space(hx, hy, hfillstyle) {
    this.hx = hx;
    this.hy = hy;
    this.hfillstyle = hfillstyle;
    this.draw = drawspace;

}
/*function drawspace() {
	ctx.lineWidth = 1;//设置线宽
    ctx.fillStyle = this.hfillstyle;
    ctx.beginPath();
    ctx.arc(this.hx, this.hy, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}*/
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
/*function Land(lx, ly, lfillstyle) {
    this.lx = lx;
    this.ly = ly;
    this.lfillstyle = lfillstyle;
    this.draw = drawLand;

}
function drawLand() {
	ctx.lineWidth = 20;//设置线宽
 ctx.strokeStyle = this.lfillstyle;
 	ctx.moveTo(this.lx,this.ly);
	
	ctx.lineTo(this.lx+620,this.ly);
	ctx.stroke();
	context.fill();//填充
	ctx.lineWidth = 1;//设置线宽
	
}*/
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
function init(){
	score=0;
	secondTime=46;
	changeTime();
	 ctx = document.getElementById('moon_canvas').getContext('2d');	
	 action(); 
}

function action(){
	
	
	
	widthCav=parseInt(moon_canvas.offsetWidth );
    heightCav=parseInt(moon_canvas.offsetHeight);
	ctx.clearRect(0,0,widthCav,600);
	widthCav=widthCav*0.8;
	var humanxRd = Math.floor(Math.random()*widthCav)+10;	
	var humanyRd = Math.floor(Math.random()*200)+30;	
	disRd= Math.floor(Math.random()*4)+1;	
	drawHuman(humanxRd,humanyRd);
	var landH=humanyRd+disRd*perDis;
	var landW=humanxRd;
	drawLand(landW,landH);//369 227
	
	var standerd=new board(10, 520, 60, 10, '#fff');
	standerd.draw();
	/*console.log(disRd);*/
	console.log(humanxRd+"   "+humanyRd);
	/*console.log("land  "+landH);*/
}
addLoadEvent(init);

document.getElementById('1').onclick=function(){
	if(disRd==1){
		
		score+=10;		
	}
	
	action();
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('2').onclick=function(){
	if(disRd==2){
		
		score+=10;		
	}
	action();
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('3').onclick=function(){
	if(disRd==3){
		
		score+=10;		
	}
	action();
	document.getElementById('score').innerHTML=score;	
}
document.getElementById('4').onclick=function(){
	if(disRd==4){
		
		score+=10;		
	}
	action();
	document.getElementById('score').innerHTML=score;	
}

	document.getElementById('help').onclick=function(){
			produceMask();
		
	}
var helpMask = document.createElement("div");
var maskFlag=true;
function produceMask(){
	if(maskFlag){	
				maskFlag=false;
				if ( !document.getElementById("helpmaskID") && 1)
				{     
					var inne; 
					inne = '<div class="gameHelp">';
					inne += ' <p class="gameHelp_title">游戏玩法</p>';
					inne += ' <p class="gameHelp_text">';
					inne += '一群鱼会出现在海底，快速找出游错方向的鱼，并迅速在上下左右按钮上点击选中它游错的方向。你的反应越快最终得分越高';
					inne += '</p>';
					inne += '</div>';
					var fs_wrapper=document.getElementById('fs_wrapper');   
					helpMask.id = "helpmaskID";
					helpMask.class = "helpmaskClass";
					helpMask.style.textAlign="center";
					helpMask.style.position = "absolute";
					helpMask.style.zIndex = "2";
					var eleOffsetWidth=parseInt(fs_wrapper.offsetWidth );
					/*var eleClientWidth=parseInt(fs_wrapper.clientWidth );*/
					helpMask.style.width =eleOffsetWidth+'px';
					helpMask.style.height ='575px';//parseInt(fs_wrapper.offsetHeight)+'px'
					helpMask.style.top =fs_wrapper.offsetTop+'px';
					helpMask.style.left =fs_wrapper.offsetLeft+'px';
					helpMask.style.background = "gray";
					helpMask.style.filter = "alpha(opacity=80)";
					helpMask.style.opacity = "1";
					helpMask.innerHTML = inne;
				   document.body.appendChild(helpMask);     
				}
				else{//已存在遮罩
					 helpMask.style.display="inline";	
					
				}
			}
		else{
			maskFlag=true;
			helpMask.style.display="none";
			
			clearInterval(timer);
			init();			
		}	
}



















