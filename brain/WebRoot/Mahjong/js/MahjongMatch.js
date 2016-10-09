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
	var secondTime=46;
	var barrels01;
	var barrels02;
	var barrels03;
	var boardx=220;
	var boardy=100;
	var boardw=155;
	var boardh=200;
	var mouseActive=false;
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
	function drawWhiteBoard(){
		/*var lineColor=ctx.createLinearGradient(this.boardx,this.boardy,this.boardx,this.boardy+this.boardh);
		lineColor.addColorStop(0,'#EEE');
		lineColor.addColorStop(1,'#CCC');*/
		ctx.fillStyle=this.boardfillStyle;
		ctx.fillRect(this.boardx,this.boardy,this.boardw,this.boardh)	
	}
	var tid;
	function moveLeft(){
		if(barrels03.bx>boardx-radius*2){
			barrels01.bx-=10;
			barrels02.bx-=10;
			barrels03.bx-=10;
		}
		else{
			clearInterval(tid);	
			drawMahjong(mahx+20,mahy);
		}
		
		if(barrels01.bx<=boardx+radius){
			barrels01.bfillStyle="#0C0";
			barrels01.bbfillStyle="#0C0";
			
		}
		if(barrels02.bx<=boardx+radius){
			barrels02.bfillStyle="#0C0";
			barrels02.bbfillStyle="#0C0";
		}
		if(barrels03.bx<=boardx+radius){
			barrels03.bfillStyle="#0C0";
			barrels03.bbfillStyle="#0C0";
		}
		/*drawGround();*/
		board.draw();
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
		barrels01=new Barrels(x+radius*1+5,y+radius*2,'#996','#FFF');
		barrels02=new Barrels(x+radius*0,y+radius*6,'#996','#FFF');
		barrels03=new Barrels(x+radius*2.5+5,y+radius*6,'#996','#FFF');
		now=Math.floor(Math.random()*3)+1;
		if(now==1){
			barrels01.bfillStyle="#F0F";
		}
		else if(now==2){
			barrels02.bfillStyle="#3ff";
		}
		else if(now==3){
			barrels03.bfillStyle="#FF0";
		}
		else{
			alert("颜色出错");	
		}
		barrels01.draw();
		barrels02.draw();
		barrels03.draw();
	}
	var timer;
	function changeTime()//计时器
	{
		secondTime--;
		document.getElementById('second').innerHTML=secondTime;
		if(secondTime>=20){
			timer = setTimeout("changeTime();",1000);//调用自身实现
		}
		else{
			clearInterval(timer);
			
			 //游戏结束把数据传到后台**************************************************************
			$.ajax({
				url: "servlet/SaveMahjongServlet",
				type: "POST",
				data: { score: score},//uname改成了score
				dataType: "json",
				success: function (result) {            	
					if (result.code == 1) {//跳转到显示游戏结束结果页面
						 $(".mahjong-score").html(result.avg);
					}
					 else{//再玩一次，，正常情况不能出现
					}
				}
			 
	  		})
			document.getElementById('same').style.display='none';
			document.getElementById('different').style.display='none';
			document.getElementById('again').style.display='inline';
			//alert("游戏结束,成绩已提交！！！");
			
		}
		return secondTime;
	}
	var board=new Board(boardx,boardy,boardw,boardh,'#0f0');
	
	function init(){
		secondTime=46;
		last=0;
		now=0;
		score=0;
		ctx=document.getElementById('mahjongMatch_canvas').getContext('2d');
		document.getElementById('score').innerHTML=score;
		document.getElementById('second').innerHTML='45';
		document.getElementById('same').style.display='none';
		document.getElementById('different').style.display='none';
		document.getElementById('again').style.display='none';
		board.draw();
		drawMahjong(mahx+20,mahy);
	}
	addLoadEvent(init);
	function action(){
		/*setTimeout("tid=setInterval('moveThem();',10);mouseActive=true;",2000);*/
			tid=setInterval('moveThem();',10);
			mouseActive=true;
			document.getElementById('same').onclick=function(){
				if(mouseActive==true){//一开始不能起作用
					tid=setInterval("moveThem();",10);
					if(now==last){
						score+=10;		
					}	
					else{
						if(score>=10) score-=10;	
					}
					document.getElementById('score').innerHTML=score;
				}
				
			}
			document.getElementById('different').onclick=function(){
				if(mouseActive==true){
					tid=setInterval("moveThem();",10);
					if(now!=last){
						score+=10;		
					}
					else{
						if(score>=10) score-=10;
					}
					document.getElementById('score').innerHTML=score;
				}
			}
		document.getElementById('second').innerHTML=changeTime();
	}	

	document.getElementById('start').onclick=function(){
		this.style.display='none';
		document.getElementById('same').style.display='inline';
		document.getElementById('different').style.display='inline';
		action();
	}
	document.getElementById('again').onclick=function(){
		init();
		this.style.display='none';
		document.getElementById('same').style.display='inline';
		document.getElementById('different').style.display='inline';
		action();
	}