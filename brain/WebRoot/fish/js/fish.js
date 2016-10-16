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
var link="fish/fish.jsp"
var index=document.getElementById('indexID');
function init() {
	 Content_inner="";
	fourBtn.style.display="none";
	gameInfo.style.display="none";
	index.style.display="inline";
	score=0;
	secondTime=46;
	changeTime();
    Content_inner += '<ul>';
    for (var i = 1; i <= sumFish; i++) {
        Content_inner += '<li id="' + i + '" class="liStl"></li>'

    }
    Content_inner += '</ul>';
    
  	
	document.getElementById('startBtnID').onclick=function(){
		content.innerHTML = Content_inner;
		console.log("asd  "+content.getElementsByTagName('li').length); 
		index.style.display="none";
		fourBtn.style.display="inline";
		gameInfo.style.display="block";
		action();
	}
	document.getElementById('upBtnID').onclick=function(){	
		if(forward==1){
			score+=10;
		}
		else{
			score-=10;
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	document.getElementById('rightBtnID').onclick=function(){
		if(forward==2){
			score+=10;
		}
		else{
			score-=10;
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	document.getElementById('downBtnID').onclick=function(){
		if(forward==3){
			score+=10;
		}
		else{
			score-=10;
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	document.getElementById('leftBtnID').onclick=function(){
		if(forward==4){
			score+=10;
		}
		else{
			score-=10;
		}
		action();
		document.getElementById('score').innerHTML=score;	
	}
	
	
	
	
	document.getElementById('help').onclick=function(){
			produceMask();
		
	}

}
addLoadEvent(init);
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
					helpMask.style.height =parseInt(fs_wrapper.offsetHeight)+'px';
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
			if(content.firstChild) {
				content.removeChild(content.firstChild);
			}
			clearInterval(timer);
			init();			
		}	
}
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

