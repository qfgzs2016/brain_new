// JavaScript Document
var cx = 0;
//canvas右上角坐标
var cy = 0;
var cwidth = 500;
//canvas大小
var cheight = 400;
var ctx;
var radius = 30;
var level =1;
var whiteChess = [];
var everything = [];
var relthing = [];
var score = 0;
var levelScore = 0;
var already = new Array();//用于判断是否重复点击
var onlyTimes=15;
function chess(chx, chy, chfillstyle) {
    this.chx = chx;
    this.chy = chy;
    this.chfillstyle = chfillstyle;
    this.draw = drawchess;

}
function drawchess() {
    ctx.fillStyle = this.chfillstyle;
    ctx.beginPath();
    ctx.arc(this.chx, this.chy, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}
function chessboard(cbx, cby, cbwidth, cbheight, cbfillstyle) {
    this.cbx = cbx;
    this.cby = cby;
    this.cbwidth = cbwidth;
    this.cbheight = cbheight;
    this.cbfillstyle = cbfillstyle;
    this.draw = drawChessBoard;
	this.clear = clearChessBoard;
}
function drawChessBoard() {
    ctx.fillStyle = this.cbfillstyle;
    /*ctx.fillRect(this.cbx,this.cby,this.cbwidth,this.cbheight);*/
    ctx.fillRect(this.cbx, this.cby, this.cbwidth, this.cbheight);
    ctx.fill();
}
function clearChessBoard() {
    ctx.fillStyle ="#c9edff";
    ctx.fillRect(this.cbx, this.cby, this.cbwidth, this.cbheight);
    ctx.fill();
}
function isDifference(p, x) {
    //为函数sunrise服务
    for (var i = 0; i < p.length; i++) {
        if (p[i] == x) {
            return false;

        }

    }
    return true;

}


function sunrise() {
    var times = blacknum;
    for (var i = 0; i < times; i++) {
        //随即产生白棋
        var num = Math.floor(Math.random() * (relthing.length - 1)) + 1;
        if (isDifference(whiteChess, num)) {
            relthing[num].chfillstyle = "rgb(255,255,255)";
            whiteChess.push(num);

        } else {
            times += 1;

        }

    }
    drawall(relthing);
    var tids = setTimeout("drawall(everything);mouseAct();", 1000)

}
function mouseAct() {
    canvas = document.getElementById('menoryGo_canvas');
    canvas.addEventListener('mousedown', findcircle, false);

}
function distsq(x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

}

for (var k = 0; k < already.length; k++) {
    already[k] = 0;
}
function findcircle(ev) {
    var mx;
    var my;
    var flag = 0;
    //判断是否点击错误
    if (ev.layerX || ev.layerX == 0) {
        mx = ev.layerX;
        my = ev.layerY}
    else if (ev.offsetX || ev.offsetX == 0) {
        mx = ev.offsetX;
        my = ev.offsetY; }
    for (var i = 1; i < everything.length; i++) {
        if (distsq(mx, my, everything[i].chx, everything[i].chy) <= radius * radius) {
            for (var j = 0; j < whiteChess.length; j++) {
                //需要知道哪些是白棋然后对其进行一一检测
                if (i == whiteChess[j]) {
                    if (already.length == 0) {
                        ///判断是否重复点击白子
                        already.push(i);
                        score += 10;

                    }
                    for (var k = 0; k < already.length; k++) {
                        if (already[k] == i) {
                            break;

                        }
                        else {
                            if (k == already.length - 1) {
                                score += 10;
                                already.push(i);
                                break;

                            }
                            continue;
						}
				  } /////
					var oneChess =everything[i]; 
					oneChess.chfillstyle="rgb(255,255,255)";
				
					oneChess.draw();      
                    document.getElementById("score").innerHTML = score;
                    if (already.length == blacknum) { //    游戏结束把数据传到后台****************************************************************
                        level++;
                        if(onlyTimes>=1){
                        	onlyTimes--;
                        }
                        
                        if (onlyTimes ==0) {
                           
                            $.ajax({
								   url: "servlet/SaveGoScore",
								   type: "POST",
								   data: { score: score},
								   dataType: "json",
								   success: function (result) {            	
									   if (result.code == 1) {//跳转到显示游戏结束结果页面
										   $("#avrScoreID").html(result.avg.toFixed(2));
									   }
									   else{//再玩一次，，正常情况不能出现
										   
									   }
           							}
         
	  					 		})
	  					 		createtips('恭喜你结束本轮游戏','middleID',gameOver);
                        }
                        //alert("恭喜你通关了，进入下一关！");
                       /* document.getElementById('menoryGo_canvas').removeEventListener('mousedown', findcircle);*/
                       setTimeout("action();",50);
                        
                        break;
                    }

                } else {//如果点击的不是白子
                    flag++;
                    if (flag == whiteChess.length && level != 1) {
                        score -= already.length * 10;
                        document.getElementById("score").innerHTML = score;
                        drawall(relthing);
						var oneChess=everything[i]; 
						oneChess.chfillstyle="rgb(255,0,0)";
						oneChess.draw();
						createtips('出错啦，返回上一级','middleID',cutDown);
						 if(onlyTimes>=1){
	                        	onlyTimes--;
	                        }
                        break;

                    }
                    continue;
                }
            }

        }
    }
}
function gameOver(){
	window.location.reload();
}
function cutDown(){
	level--;
	everything[0].clear();
    action();
}
function drawall(pc) {
    for (var i = 0; i < pc.length; i++) {
        pc[i].draw();
		/*if(s==true) alert(i);*/
    }
}

function action() {
    mouseActive = false;
    whiteChess.length = 0;
    everything.length = 0;
    relthing.length = 0;
    already.length = 0;
    switch (level) {
        case 1:
        chessCol = 2;
        chessRow = 2;
        blacknum = 2;
        levelScore = 10;
        break;
        case 2:
        chessCol = 3;
        chessRow = 2;
        blacknum = 3;
        levelScore = 20;
        break;
        case 3:
        chessCol = 3;
        chessRow = 3;
        blacknum = 3;
        levelScore = 30;
        break;
        case 4:
        chessCol = 4;
        chessRow = 3;
        blacknum = 4;
        levelScore = 40;
        break;
        case 5:
        chessCol = 4;
        chessRow = 4;
        blacknum = 5;
        levelScore = 50;
        break;
        case 6:
        chessCol = 5;
        chessRow = 4;
        blacknum = 6;
        levelScore = 60;
        break;
        case 7:
        chessCol = 5;
        chessRow = 5;
        blacknum = 7;
        levelScore = 70;
        break;
        case 8:
        chessCol = 6;
        chessRow = 5;
        blacknum = 8;
        levelScore = 80;
        break;
        case 9:
        chessCol = 6;
        chessRow = 5;
        blacknum = 9;
        levelScore = 90;
        break;
        case 10:
        chessCol = 6;
        chessRow = 5;
        blacknum = 10;
        levelScore = 100;
        break;
        case 11:
        chessCol = 6;
        chessRow = 5;
        blacknum = 11;
        levelScore = 110;
        break;
        case 12:
        chessCol = 6;
        chessRow = 5;
        blacknum = 12;
        levelScore = 120;
        break;
        case 13:
        chessCol = 6;
        chessRow = 5;
        blacknum = 13;
        levelScore = 120;
        break;
        case 14:
        chessCol = 6;
        chessRow = 5;
        blacknum = 14;
        levelScore = 120;
        break;
        case 15:
        chessCol = 6;
        chessRow = 5;
        blacknum = 15;
        levelScore = 120;
        break;

    }
    var chessGap = 5;
    //间隔
    var cbwidth = (chessCol + 1) * (radius * 2 + chessGap);
    var chheight = (chessRow + 1) * (radius * 2 + chessGap);
    var cbx = Math.floor((cwidth - cbwidth) / 2);
    var cby = Math.floor((cheight - chheight) / 2);
    var chessBoard = new chessboard(cbx, cby, cbwidth, chheight, "#d0a976")
    everything.push(chessBoard);
    //一这个数组的旗子直都是黑色的
    relthing.push(chessBoard);
    //随着需要改变
    for (var i = 1; i <= chessRow; i++) {
        for (var j = 1; j <= chessCol; j++) {
            var one = new chess((cbx + (radius * 2 + chessGap) * j), (cby + (radius * 2 + chessGap) * i), "rgb(0,0,0)");
            var oneone = new chess((cbx + (radius * 2 + chessGap) * j), (cby + (radius * 2 + chessGap) * i), "rgb(0,0,0)");
            /*console.log(i+" "+j+" "+(cbx+(radius*2+chessGap)*j)+"  "+(cby+(radius*2+chessGap)*i));*/
            everything.push(one);
            relthing.push(oneone);

        }

    }
    ctx = document.getElementById('menoryGo_canvas').getContext('2d');
    drawall(everything);
    setTimeout("sunrise();", 200);

    document.getElementById("level").innerHTML = onlyTimes;
    document.getElementById("score").innerHTML = score;
}
function init(){
	document.getElementById('again').style.display='none';
	 document.getElementById("level").innerHTML = 15;
    document.getElementById("score").innerHTML = 0;
}
addLoadEvent(init);
document.getElementById('start').onclick=function(){
	document.getElementById('message').style.display='none';
	document.getElementById('again').style.display='inline';
	document.getElementById('start').style.display='none';
	action();
}
document.getElementById('again').onclick=function(){
	window.location.reload();
}
/*function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem=document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="50px";	
	elem.style.top="35px";
	moveElement("message",600,100,100);
}*/

