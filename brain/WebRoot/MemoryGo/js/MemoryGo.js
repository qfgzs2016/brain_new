// JavaScript Document
	var cx=0;//canvas右上角坐标
	var cy=0;
	var cwidth=800;//canvas大小
	var cheight=600;
	var ctx;
	var radius=30;
	var level=1//关数
	var everything=[];
	var relthing=[];
	var rightnum=0;
	var mouseActive;
	var score=0;
	var levelScore=0;
	function chess(chx,chy,chfillstyle){
		this.chx=chx;
		this.chy=chy;
		this.chfillstyle=chfillstyle;
		this.draw=drawchess;
	}
	function drawchess(){
		ctx.fillStyle=this.chfillstyle;
		ctx.beginPath();
		ctx.arc(this.chx,this.chy,radius,0,Math.PI*2,true);
		ctx.closePath();	
		ctx.fill();	
	}
	function chessboard(cbx,cby,cbwidth,chheight,cbfillstyle){
		this.cbx=cbx;	
		this.cby=cby;	
		this.cbwidth=cbwidth;	
		this.chheight=chheight;	
		this.cbfillstyle=cbfillstyle;
		this.draw=drawChessBoard;
	}
	function drawChessBoard(){
		ctx.fillStyle=this.cbfillstyle;
		/*ctx.fillRect(this.cbx,this.cby,this.cbwidth,this.cbheight);*/
		ctx.fillRect(this.cbx,this.cby,this.cbwidth,this.chheight);
		ctx.fill();		
	}
	
	
	
	function isDifference(p,x){//为函数sunrise服务
		for(var i=0;i<p.length;i++){
			if(p[i]==x){
				return false;	
			}
		}
		return true;
	}
	
	
	var whiteChess=[];
	function sunrise(){
		var times=level+1;
		for(var i=0;i<times;i++){//随即产生白棋
			var num=Math.floor(Math.random()*(relthing.length-1))+1;
			if(isDifference(whiteChess,num)){
				relthing[num].chfillstyle="rgb(255,255,255)";
				whiteChess.push(num);
			}else{
				times+=1;	
			}
		}	
		drawall(relthing);
		setTimeout("drawall(everything);",2000);
		mouseActive=true;
		if(mouseActive){
			canvas=document.getElementById('menoryGo_canvas');
			canvas.addEventListener('mousedown',findcircle,false);
		}
	}
	
	function distsq(x1,y1,x2,y2){
		return (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
	}
	
	function findcircle(ev){
		var mx;
		var my;
		var flag=0;//判断是否点击错误
		if(ev.layerX || ev.layerX==0){
			mx=ev.layerX;
			my=ev.layerY
		}
		else if(ev.offsetX || ev.offsetX==0){
			mx=ev.offsetX;
			my=ev.offsetY;
		}
		for(var i=1;i<=everything.length;i++){
			if(distsq(mx,my,everything[i].chx,everything[i].chy)<=radius*radius){
				for(var j=0;j<whiteChess.length;j++){//需要知道哪些是白棋然后对其进行一一检测
					if(i==whiteChess[j]){
						ctx.fillStyle="rgb(255,255,255)";
						ctx.beginPath();
						ctx.arc(everything[i].chx,everything[i].chy,radius,0,Math.PI*2,true);
						ctx.closePath();	
						ctx.fill();
						rightnum++;					
						score+=10;
						document.getElementById("score").innerHTML=score;
						if(rightnum==level+1){//    游戏结束吧数据传到后台****************************************************************
							level++;
							if(level>3){//测试
								alert("asd");
								$.ajax({
								   url: "servlet/SaveGoScore",
								   type: "POST",
								   data: { score: score},
								   dataType: "json",
								   success: function (result) {            	
									   if (result.code == 1) {//跳转到显示游戏结束结果页面
										  alert("数据");//测试
									   }
									   else{//再玩一次，，正常情况不能出现
										   alert("没有");//测试
									   }
           							}
         
	  					 		})
							}
							rightnum=0;
							alert("恭喜你通关了，进入下一关！");
							init();
							break;	
						}
					}else{
						flag++;
						if(flag==whiteChess.length && level!=1){
							score-=rightnum*10;
							document.getElementById("score").innerHTML=score;
							drawall(relthing);
							ctx.fillStyle="rgb(255,0,0)";
							ctx.beginPath();
							ctx.arc(everything[i].chx,everything[i].chy,radius,0,Math.PI*2,true);
							ctx.closePath();	
							ctx.fill();
							alert("返回上一级");
							level--;
							init();
							break;
						}
						continue;	
					}
				}
			}
		}
	}
	
	function drawall(pc){
		for(var i=0;i<pc.length;i++){
			pc[i].draw();
		}
	}
	
	function init(){
		mouseActive=false;
		whiteChess.length=0;//把数据清空
		everything.length=0;//把数据清空
		relthing.length=0;//把数据清空
		switch(level){
		case 1:
			chessCol=3;
			chessRow=2;
			blacknum=2;
			levelScore=10;
		break;
		case 2:
			chessCol=3;
			chessRow=3;
			blacknum=3;
			levelScore=20;
		break;
		case 3:
			chessCol=4;
			chessRow=3;
			blacknum=4;
			levelScore=30;
		break;
		case 4:
			chessCol=4;
			chessRow=4;
			blacknum=5;
			levelScore=40;
		break;
		case 5:
			chessCol=5;
			chessRow=4;
			blacknum=6;
			levelScore=50;
		break;
		case 6:
			chessCol=5;
			chessRow=5;
			blacknum=7;
			levelScore=60;
		break;
		case 7:
			chessCol=6;
			chessRow=5;
			blacknum=8;
			levelScore=70;
		break;
		case 8:
			chessCol=6;
			chessRow=6;
			blacknum=9;
			levelScore=80;
		break;
		case 9:
			chessCol=7;
			chessRow=6;
			blacknum=10;
			levelScore=90;
		break;
		case 10:
			chessCol=7;
			chessRow=7;
			blacknum=11;
			levelScore=100;
		break;
		case 11:
			chessCol=8;
			chessRow=7;
			blacknum=12;
			levelScore=110;
		break;
		case 12:
			chessCol=8;
			chessRow=8;
			blacknum=13;
			levelScore=120;
		break;		
	}
	var chessGap=5;//间隔
	var cbwidth=(chessCol+1)*(radius*2+chessGap);
	var chheight=(chessRow+1)*(radius*2+chessGap);
	var cbx=Math.floor((cwidth-cbwidth)/2);
	var cby=Math.floor((cheight-chheight)/2);
	var chessBoard=new chessboard(cbx,cby,cbwidth,chheight,"rgb(250,250,0)")
	everything.push(chessBoard);//一这个数组的旗子直都是黑色的
	relthing.push(chessBoard);//随着需要改变
	for(var i=1;i<=chessRow;i++){
		for(var j=1;j<=chessCol;j++){
			var one=new chess((cbx+(radius*2+chessGap)*j),(cby+(radius*2+chessGap)*i),"rgb(0,0,0)");
			var oneone=new chess((cbx+(radius*2+chessGap)*j),(cby+(radius*2+chessGap)*i),"rgb(0,0,0)");
			/*console.log(i+" "+j+" "+(cbx+(radius*2+chessGap)*j)+"  "+(cby+(radius*2+chessGap)*i));*/
			everything.push(one);
			relthing.push(oneone);
		}
	}
		ctx=document.getElementById('menoryGo_canvas').getContext('2d');
		drawall(everything);
		setTimeout("sunrise();",1000);
		
		document.getElementById("level").innerHTML=level;
		document.getElementById("score").innerHTML=score;
		document.getElementById("date").innerHTML=new Date();

	}
	addLoadEvent(init);
	/* $("#login").click(function(){
	   $.ajax({
           url: "",
           type: "POST",
           data: { uname: score},
           dataType: "json",
           success: function (result) {            	
               if (result.code == 1) {//跳转到显示游戏结束结果页面
            	  
               }
               else{//再玩一次，，正常情况不能出现
            	 
               }
           }
         
	   })
 })*/