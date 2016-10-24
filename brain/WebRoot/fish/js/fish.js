// JavaScript Document
var content = document.getElementById('actionArea');
var Content_inner = "";
var ctrFishImg = document.createElement('img');
var fishOneImg = document.createElement('img');
var fishiTwoImg = document.createElement('img');
var fishThreeImg = document.createElement('img');
var fishFourImg = document.createElement('img');
var helpMask = document.createElement("div");
var col = 12;
var sumFish = 108;
var ctrFishRd ;
var score;
var forward;//中间鱼的方向
var fourBtn=document.getElementById('fourBtnID');
var gameInfo=document.getElementById('gameInfoID');
var link="/brain/fish/fish.jsp"
var index=document.getElementById('indexID');
var leftBtn=document.getElementById('leftBtnID');
var rightBtn=document.getElementById('rightBtnID');
var upBtn=document.getElementById('upBtnID');
var downBtn=document.getElementById('downBtnID');

var fs_wrapper=document.getElementById('fs_wrapper');   
helpInfo = '<div class="gameHelp">';
helpInfo += ' <p class="gameHelp_title">游戏玩法</p>';
helpInfo += ' <p class="gameHelp_text">';
helpInfo += '一群鱼会出现在海底，快速找出最中间的鱼，并迅速在上下左右按钮上点击选中它的方向。你的反应越快最终得分越高';
helpInfo += '</p>';
helpInfo += '</div>';
function init() {
	if(content.firstChild) {
		content.removeChild(content.firstChild);
	}
	Content_inner="";
	fourBtn.style.display="none";
	gameInfo.style.display="none";
	index.style.display="inline";
	score=0;
	secondTime=46;
	//changeTime();
    Content_inner += '<ul>';
    for (var i = 1; i <= sumFish; i++) {
        Content_inner += '<li id="' + i + '" class="liStl"></li>'

    }
    Content_inner += '</ul>';
    
  	
	document.getElementById('startBtnID').onclick=function(){
		content.innerHTML = Content_inner;
		timeFlag=true;
		isPause();
		
		
		offPic.src="img/286-pause2.png";
		score=0;
		document.getElementById('score').innerHTML=score;	
		index.style.display="none";
		fourBtn.style.display="inline";
		gameInfo.style.display="block";
		changeTime();
		action();
	}
	document.getElementById('upBtnID').onclick=function(){	
		if(forward==1){
			score+=10;
		}
		else{
			
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	document.getElementById('rightBtnID').onclick=function(){
		if(forward==2){
			score+=10;
		}
		else{
			
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	document.getElementById('downBtnID').onclick=function(){
		if(forward==3){
			score+=10;
		}
		else{
			
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	document.getElementById('leftBtnID').onclick=function(){
		if(forward==4){
			score+=10;
		}
		else{
			
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	
	
	
	
	document.getElementById('help').onclick=function(){
			produceMask(helpInfo,fs_wrapper);
		
	}

}
addLoadEvent(init);


function action(){
	
	ctrFishRd = Math.floor(Math.random() * 107) + 1;
	var shapeRd = Math.floor(Math.random() * 7) + 1;
    while (ctrFishRd <= 2 * col || ctrFishRd >= sumFish - 2 * col || ctrFishRd % col == 1 || ctrFishRd % col == 0 || ctrFishRd % col == 2 || ctrFishRd % col == col - 1) {
        ctrFishRd = Math.floor(Math.random() * 107) + 1;
    }
    switch (shapeRd) {
        case 1:
        //十
        allKindOfShapeRd(ctrFishRd - col, ctrFishRd + 1, ctrFishRd + col, ctrFishRd - 1);
        break;
        case 2:
        //一
        allKindOfShapeRd(ctrFishRd - 1, ctrFishRd - 2, ctrFishRd + 1, ctrFishRd + 2);
        break;
        case 3:
        //|	
        allKindOfShapeRd(ctrFishRd - col, ctrFishRd + 1, ctrFishRd + col, ctrFishRd - 1);
        break;
        case 4:
        //^
        allKindOfShapeRd(ctrFishRd + col - 1, ctrFishRd + 2 * col - 2, ctrFishRd + col + 1, ctrFishRd + 2 * col + 2);
        break;
        case 5:
        //v
        allKindOfShapeRd(ctrFishRd - col - 1, ctrFishRd - 2 * col - 2, ctrFishRd - col + 1, ctrFishRd - 2 * col + 2);
        break;
        case 6:
        //>		
        allKindOfShapeRd(ctrFishRd + col - 1, ctrFishRd + 2 * col - 2, ctrFishRd - col - 1, ctrFishRd - 2 * col - 2);
        break;
        case 7:
        //<
        allKindOfShapeRd(ctrFishRd + col + 1, ctrFishRd + 2 * col + 2, ctrFishRd - col + 1, ctrFishRd - 2 * col + 2);
        break;
	 }
}
function produceFish(ele, src, RD) {
    ele.src = src;
    ele.style.width = '100%';
    ele.style.height = '100%';
    document.getElementById(RD).appendChild(ele);

}
function appearFourFish(src, num1, num2, num3, num4) {
    //十
    produceFish(fishOneImg, src, num1);
    produceFish(fishiTwoImg, src, num2);
    produceFish(fishThreeImg, src, num3);
    produceFish(fishFourImg, src, num4);

}
function allKindOfForwarRd(num1, num2, num3, num4) {
    var diffForward = Math.floor(Math.random() * 4) + 1;
    switch (diffForward) {
        case 1:
        //上
        appearFourFish("fish/img/fish_up.png", num1, num2, num3, num4);

        break;
        case 2:
        //右
        appearFourFish("fish/img/fish_right.png", num1, num2, num3, num4);
        break;
        case 3:
        //下
        appearFourFish("fish/img/fish_down.png", num1, num2, num3, num4);
        break;
        case 4:
        //左
        appearFourFish("fish/img/fish_left.png", num1, num2, num3, num4);
        break;

    }

}

function allKindOfShapeRd(num1, num2, num3, num4) {
    forward = Math.floor(Math.random() * 4) + 1;
    if (forward == 1) {
        //上
        produceFish(ctrFishImg, "fish/img/fish_up.png", ctrFishRd);

        if (Math.random() <= 0.33) {
            //相同
            appearFourFish("fish/img/fish_up.png", num1, num2, num3, num4);

        }
        else {
            //不相同
            allKindOfForwarRd(num1, num2, num3, num4);

        }

    }
    else if (forward == 2) {
        //主右
        produceFish(ctrFishImg, "fish/img/fish_right.png", ctrFishRd);

        if (Math.random() <= 0.33) {
            //相同
            appearFourFish("fish/img/fish_right.png", num1, num2, num3, num4);

        }
        else {
            //不相同
            allKindOfForwarRd(num1, num2, num3, num4);

        }

    }
    else if (forward == 3) {
        produceFish(ctrFishImg, "fish/img/fish_down.png", ctrFishRd);

        if (Math.random() <= 0.33) {
            //相同
            appearFourFish("fish/img/fish_down.png", num1, num2, num3, num4);

        }
        else {
            //不相同
            allKindOfForwarRd(num1, num2, num3, num4);

        }

    }
    else if (forward == 4) {
        produceFish(ctrFishImg, "fish/img/fish_left.png", ctrFishRd);

        if (Math.random() <= 0.33) {
            //相同
            appearFourFish("fish/img/fish_left.png", num1, num2, num3, num4);

        }
        else {
            //不相同
            allKindOfForwarRd(num1, num2, num3, num4);

        }

    }

}

function submitDate(){
	$.ajax({
		url: "servlet/SaveFishServlet",
		type: "POST",
		data: { score: score},
		dataType: "json",
		success: function (result) {            	
			if (result.code == 1) {//跳转到显示游戏结束结果页面
				$("#avrScoreID").html(result.avg.toFixed(2));
				//document.getElementByClass("fish-score").innerHTML = mahjongscore.toFixed(2);
			}
			 else{//再玩一次，，正常情况不能出现
			}
		}
	 
		})	

}
function isPause(){
	if(timeFlag){
		leftBtn.style.display="inline";
		rightBtn.style.display="inline";
		upBtn.style.display="inline";
		downBtn.style.display="inline";
		
	}
	else{
		leftBtn.style.display="none";
		rightBtn.style.display="none";
		upBtn.style.display="none";
		downBtn.style.display="none";
	}	
}




