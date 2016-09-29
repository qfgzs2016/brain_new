// JavaScript Document
	var cwidth=800;
	var cheight=400;
	var mahx=250;
	var mahy=100;
	var ctx;
	var radius=25;
	var last=0;
	var now=0;
	var score=0;
	var secondTime=45;
	var barrels01;
	var barrels02;
	var barrels03;
	var boardx=240;
	var boardy=100;
	var boardw=200;
	var boardh=200;
	function Barrels(bx,by,bfillStyle,bbfillStyle){
		this.bx=bx;
		this.by=by;
		this.bfillStyle=bfillStyle;
		this.bbfillStyle=bbfillStyle;
		this.draw=drawBarrels;
		this.moveit=moveLeft;
	}
	
	function drawBarrels(){ //绘制y一桶
		ctx.fillStyle=this.bfillStyle;
		ctx.beginPath();
		ctx.arc(this.bx,this.by,radius,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		ctx.globalCompositeOperation="source-over";
		ctx.fillStyle=this.bbfillStyle;
		ctx.beginPath();
		ctx.arc(this.bx,this.by,radius-5,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		ctx.globalCompositeOperation="source-over";
		ctx.fillStyle=this.bfillStyle;
		ctx.beginPath();
		ctx.arc(this.bx,this.by,radius-10,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		ctx.globalCompositeOperation="source-over";
		ctx.fillStyle=this.bbfillStyle;
		ctx.beginPath();
		ctx.arc(this.bx,this.by,radius-15,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		ctx.globalCompositeOperation="source-over";
		ctx.fillStyle=this.bfillStyle;
		ctx.beginPath();
		ctx.arc(this.bx,this.by,radius-20,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();		
	}
	function Board(boardx,boardy,boardw,boardh,boardfillStyle){
		this.boardx=boardx;
		this.boardy=boardy;
		this.boardw=boardw;
		this.boardh=boardh;
		this.boardfillStyle=boardfillStyle;
		this.draw=drawWhiteBoard;
	}
	function drawWhiteBoard(x,y,w,h){
		var lineColor=ctx.createLinearGradient(this.boardx,this.boardy,this.boardx,this.boardy+this.boardh);
		lineColor.addColorStop(0,'#EEE');
		lineColor.addColorStop(1,'#CCC');
		ctx.fillStyle=lineColor;
		ctx.fillRect(this.boardx,this.boardy,this.boardw,this.boardh)	
	}
	var tid;
	function moveLeft(){
		if(barrels03.bx>boardx-radius){
			barrels01.bx-=10;
			barrels02.bx-=10;
			barrels03.bx-=10;
		}
		else{
			clearInterval(tid);	
			drawMahjong(mahx,mahy);
		}
		
		if(barrels01.bx<=boardx+radius+10){
			barrels01.bfillStyle="#CCC";
			barrels01.bbfillStyle="#CCC";
			
		}
		if(barrels02.bx<=boardx+radius+10){
			barrels02.bfillStyle="#CCC";
			barrels02.bbfillStyle="#CCC";
		}
		if(barrels03.bx<=boardx+radius+10){
			barrels03.bfillStyle="#CCC";
			barrels03.bbfillStyle="#CCC";
		}
		/*drawGround();*/
		drawWhiteBoard(this.boardx,this.boardy,this.boardw,this.boardh);
		
		barrels01.draw();
		barrels02.draw();
		barrels03.draw();
	}
	function moveThem(){
		barrels01.moveit();
		barrels02.moveit();
		barrels03.moveit();
	}
	/*var elem = document.getElementById("cover");
  	elem.style.height = "20px";
	var movement;
	function disCover(){
		var elem=document.getElementById("cover");
		var coverH=parseInt(elem.style.height);	
		if(coverH>=20){
			coverH-=10;
			elem.style.height=coverH+"px";
			movement=setTimeout("disCover();",1);	
		}
		else{
			clearTimeout(movement);
		}
	}
	
	function coverMahjong(){
		var elem=document.getElementById("cover");
		var coverH=parseInt(elem.style.height);	
		console.log(coverH);
		if(coverH<=200){
			coverH+=10;
			elem.style.height=coverH+"px";
			movement=setTimeout("coverMahjong();",1);	
		}
		else{
			disCover();
		}	
	}*///遮盖板

	function drawMahjong(x,y){
		last=now;
		barrels01=new Barrels(x+radius*3.5+5,y+radius*2,'#996','#FFF');
		barrels02=new Barrels(x+radius*2+5,y+radius*6,'#996','#FFF');
		barrels03=new Barrels(x+radius*5+5,y+radius*6,'#996','#FFF');
		now=Math.floor(Math.random()*3)+1;
		if(now==1){
			barrels01.bfillStyle="#f00";
		}
		else if(now==2){
			barrels02.bfillStyle="#0f0";
		}
		else if(now==3){
			barrels03.bfillStyle="#00f";
		}
		else{
			alert("颜色出错");	
		}
		barrels01.draw();
		barrels02.draw();
		barrels03.draw();
		
	}
	var timer;
	function changeTime()
	{
		secondTime--;
		document.getElementById('second').innerHTML=secondTime;
		if(secondTime>=1){
			timer = setTimeout("changeTime();",1000);//调用自身实现
		}
		else{
			clearInterval(timer);
			alert("游戏结束！！！");// 游戏结束把数据传到后台**************************************************************
			$.ajax({
				url: "servlet/SaveMahjongServlet",
				type: "POST",
				data: { score: score},//uname改成了score
				dataType: "json",
				success: function (result) {            	
					if (result.code == 1) {//跳转到显示游戏结束结果页面
					}
					 else{//再玩一次，，正常情况不能出现
					}
				}
			 
	  		})
		}
		return secondTime;
	}//计时器
	
	function init(){
		ctx=document.getElementById('mahjongMatch_canvas').getContext('2d');
		drawWhiteBoard(this.boardx,this.boardy,this.boardw,this.boardh);
		drawMahjong(mahx,mahy);
		confirm("开始游戏？？？");
		setTimeout("drawMahjong(mahx,mahy);",2000);
		document.getElementById('score').innerHTML=score;
		var agreeBtn=document.getElementById('agree');
		agreeBtn.onclick=function(){
			tid=setInterval("moveThem();",10);
			if(now==last){
				score+=10;		
			}
			else{
				if(score>=10) score-=10;	
			}
			document.getElementById('score').innerHTML=score;
			
		}
		var disagreeBtn=document.getElementById('disagree');
		disagreeBtn.onclick=function(){
			tid=setInterval("moveThem();",10);
			if(now!=last){
				score+=10;		
			}
			else{
				if(score>=10) score-=10;
			}
			document.getElementById('score').innerHTML=score;
		}
		
		document.getElementById('second').innerHTML=changeTime();
	}	
	addLoadEvent(init);
	
	