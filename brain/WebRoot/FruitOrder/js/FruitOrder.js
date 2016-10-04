// JavaScript Document
	var waitTime=1000;
	var order=0;
	var tid;
	var list=new Array();
	var lis = document.getElementsByTagName("li");
	var rdn=0;
	function action(){
		for(var i=0;i<4;i++){
			list[i]=0;
		}
		for(var i=0;i<4;i++){
			list[i]=getRandNum();
			console.log("**list[rdn] "+list[i]);
		}
		appear(order);
		tid=setInterval('disappear(order); order++;appear(order); ',waitTime);
		
	}
	addLoadEvent(action);
	
	function appear(n){
		if(order==4) {
			clearTimeout(tid);
			clickEvent();
			return;
		}
		var bigImg = document.createElement("img");     //创建一个img元素  
		bigImg.src="FruitOrder/image/"+n+".jpg";   //给img元素的src属性赋
		var myLi = document.getElementById(list[n]); //获得dom对象值  
		myLi.appendChild(bigImg);      //为dom添加子元素img  
		
	}
	function disappear(n){
		var myLi = document.getElementById(list[n]); //获得dom对象值 
		myLi.removeChild(myLi.firstChild); 

	}
	function clickEvent(){
		for(var i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				if(list[rdn]==parseInt(this.getAttribute("id"))){
					var bigImg = document.createElement("img");     //创建一个img元素  
					bigImg.src="FruitOrder/image/"+rdn+".jpg";   //给img元素的src属性赋值
					var myLi = document.getElementById(list[rdn]); //获得dom对象值  
					myLi.appendChild(bigImg);      //为dom添加子元素img  
					rdn++;		
					if(rdn==4){
						alert("游戏完成");	
					}
				} 
				else{
					alert("你错了");	
				}
			}
		}
	}
	function getRandNum(){//得到不重复的随机值
		var i=-1;
		while(i==-1||!conin(i,4)){
				i= Math.floor(Math.random()*9)+1;
		}
		return i;
	}
	function conin(n,m){
		for(var i=0;i<m;i++){
			if(n==list[i]){
				return false;
			}
		}
		return true;
	}
	