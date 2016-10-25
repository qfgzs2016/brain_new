// JavaScript Document
/***********************页面加载完执行函数的函数*********************************/

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();	
		}
	}
}
/*********************得到下一个元素结点node为.nextSibling**********************************/
function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

/*******************自定义的insertAfter函数***************************/
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);	
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);	
	}
}
/**************************用dom改变元素的class属性***************************/
/***addClass***/
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}
/***改变某元素下一个相邻元素的样式***/
function styleElementSibling(tag,theclass){
	if(!document.getElementsByTagName) return false;
	var elems=document.getElementsByTagName(tag);
	var elem;
	for(var i=0;i<elems.length;i++){
		elem =getNextElement(elems[i].nextbling);
		add(elem,theclass);	
	}
}

/********************让标签动起来*****************************************/
function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);	
	}
	if(!elem.style.left){
		elem.style.left="0px";		
	}
	if(!elem.style.top){
		elem.style.top="0px";		
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	var dist=0;
	if(xpos==final_x && ypos==final_y) return true;
	if(xpos<final_x)
	{
		dist=Math.ceil((final_x-xpos)/10);
		xpos+=dist;
	}
	if(xpos>final_x){
		dist=Math.ceil((xpos-final_x)/10);
		xpos-=dist;
	}
	if(ypos<final_y){
		dist=Math.ceil((final_y-ypos)/10);
		ypos+=dist;
	}
	if(ypos>final_y){
		dist=Math.ceil((ypos-final_y)/10);
		ypos-=dist;
	}
	
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);		
}


/********************声音设置*******************************/
var voiceFlag=true;
if(document.getElementById('voice')){
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
}


/********************时间*******************************/
//secondTime=46; 初始示函数赋值；
var secondTime;
var timer;
function changeTime()//计时器
{
	
		secondTime--;
		document.getElementById('second').innerHTML=secondTime;
	
		if(secondTime>=1){
			timer = setTimeout("changeTime();",1000);//调用自身实现
		}
		else{
			submitDate();
			clearInterval(timer);
			createPrompt();	
		}
}
var timeFlag=false;
var nowTime;
function isOff(){
	offPic.src="img/285-play3.png";
	nowTime=secondTime;	
	clearInterval(timer);
	timeFlag=false;
	isPause();//禁止操作函数在主js文件定义
	
}
function isNotOff(){
	secondTime=nowTime+1;
	
	offPic.src="img/286-pause2.png";
	timeFlag=true;
	isPause();
	
	
	if(helpMask.style.display=="inline"){
		maskFlag=true;
		helpMask.style.display="none";			
	}
	if(document.getElementById('second')){
		changeTime();
	}
}
if(document.getElementById('off')){
	var offPic=document.getElementById('off');
	offPic.onclick=function(){
		if(timer){
			if(timeFlag){
				isOff();	
			}
			else{
				
				isNotOff();	
			}
		}
	}	
}

/*****************************************************/
	
function isRight(ele){
	if(!document.getElementById('rightFontID')){
		var gou=document.createElement('span');
		gou.setAttribute('id','rightFontID');
		gou.setAttribute('class','right');
		gou.innerHTML='√';
//		var whiteBoard=document.getElementById('pukeid');
		ele.appendChild(gou);
//		gou.style.display="none";
	}
	else{
		document.getElementById('rightFontID').style.display="inline";
		
	}
	setTimeout("document.getElementById('rightFontID').style.display='none';",100);
}
function isWrong(ele){
	if(!document.getElementById('wrongFontID')){
		var wrong=document.createElement('span');
		wrong.setAttribute('id','wrongFontID');
		wrong.setAttribute('class','wrong');
		wrong.innerHTML='×';
//		var whiteBoard=document.getElementById('pukeid');
		ele.appendChild(wrong);
//		wrong.style.display="none";
	}
	else{
		document.getElementById('wrongFontID').style.display="inline";
	}
	setTimeout("document.getElementById('wrongFontID').style.display='none';",100);
}	
function getScore(ele,sc){
	var score;
	if(!document.getElementById('getScoreID')){
		score=document.createElement('span');
		score.setAttribute('id','getScoreID');
		score.setAttribute('class','getScoreCla');
		score.innerHTML="+"+sc;
//		var whiteBoard=document.getElementById('pukeid');
		ele.appendChild(score);
//		wrong.style.display="none";
	}
	else{
		document.getElementById('getScoreID').innerHTML="+"+sc;
		document.getElementById('getScoreID').style.display="inline";
	}
	setTimeout("document.getElementById('getScoreID').style.display='none';",300);
}		
/*帮助信息*/
var helpInfo; 
var maskFlag=true;
var helpMask = document.createElement("div");
function produceMask(helpInfo,ele){
	if(maskFlag){	
				maskFlag=false;
				if ( !document.getElementById("helpmaskID") && 1)
				{     
					helpMask.id = "helpmaskID";
					helpMask.class = "helpmaskClass";
					helpMask.style.textAlign="center";
					helpMask.style.position = "absolute";
					helpMask.style.zIndex = "2";
					var eleOffsetWidth=parseInt(ele.offsetWidth );
					helpMask.style.width =parseInt(ele.offsetWidth )+'px';
					helpMask.style.height =parseInt(fs_wrapper.offsetHeight)+'px';//parseInt(fs_wrapper.offsetHeight)+'px'
				
					helpMask.style.top =ele.offsetTop+'px';
					helpMask.style.left =ele.offsetLeft+'px';
					helpMask.style.background = "gray";
					helpMask.style.filter = "alpha(opacity=80)";
					helpMask.style.opacity = "1";
					helpMask.innerHTML = helpInfo;
					helpMask.style.display="inline";		
				   document.body.appendChild(helpMask);     
				}
				else{//已存在遮罩
					 helpMask.style.display="inline";			
				}
				
				if(timer){	
					isOff();
				}
				
			}
		else{
			maskFlag=true;
			helpMask.style.display="none";
			
			if(timer){				
				isNotOff();
			}
		}	
}		


function produceMask02(helpInfo,ele){
	if(maskFlag){	
				maskFlag=false;
				if ( !document.getElementById("helpmaskID") && 1)
				{     
					helpMask.id = "helpmaskID";
					helpMask.class = "helpmaskClass";
					helpMask.style.textAlign="center";
					helpMask.style.position = "absolute";
					helpMask.style.zIndex = "2";
					var eleOffsetWidth=parseInt(ele.offsetWidth );
					helpMask.style.width =parseInt(ele.offsetWidth )+'px';
					helpMask.style.height =parseInt(fs_wrapper.offsetHeight)+'px';//parseInt(fs_wrapper.offsetHeight)+'px'
				
					helpMask.style.top =ele.offsetTop+'px';
					helpMask.style.left =ele.offsetLeft+'px';
					helpMask.style.background = "gray";
					helpMask.style.filter = "alpha(opacity=80)";
					helpMask.style.opacity = "1";
					helpMask.innerHTML = helpInfo;
					
				   document.body.appendChild(helpMask);     
				}
				else{//已存在遮罩
					 helpMask.style.display="inline";			
				}
								
			}
		else{
			maskFlag=true;
			helpMask.style.display="none";					
		}	
}



		
		
		
		
		
		
		
		
		
		
		
		
		
