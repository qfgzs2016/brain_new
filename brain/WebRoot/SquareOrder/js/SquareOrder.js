// JavaScript Document
	var rdn=1;
	var list=new Array();
	var lis = document.getElementsByTagName("li");
	var value=new Array();
	
    function action(){
		var step=0; 
		e.className= "fanzhuan";
		for(var i=1;i<lis.length;i++){
			lis[i].className = "fanzhuan";
			list[i]=0;
		}
		for(var i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				if(rdn==value[parseInt(this.getAttribute("id"))-1]){
                        step++;
						var tip=step+1;
						console.log(rdn);
						this.innerHTML="next"+tip;
						/*this.className='seconfli';
						console.log("Body 元素 CSS 类为: " + lis[rdn].className);*/
						/*this.classList.add("seconfli");*/
						if(	step==16){
							clearInterval(timer);
							alert("游戏完成");	
							$.ajax({
								url: "servlet/SaveNumberSortServlet",
								type: "POST",
								data: { clickTime: secondTime},
								dataType: "json",
								success: function (result) {            	
									if (result.code == 1) {//跳转到显示游戏结束结果页面
										
									}
									 else{//再玩一次，，正常情况不能出现
									}
								}
							 
								})
						}
                 }
				 else{
					 alert("错了");
					 clearInterval(timer);
				 }
				rdn++;
			}
		}
		changeTime();
	}
	
	/*******************以下一小部分为css动画结束检测**********************************/
	var e = document.getElementById('1');
	function whichTransitionEvent(){
		var t;
		var el = document.createElement('fakeelement');
		var transitions = {
			'transition':'transitionend',
			'OTransition':'oTransitionEnd',
			'MozTransition':'transitionend',
			'WebkitTransition':'webkitTransitionEnd'
		}
		for(t in transitions){
			if( el.style[t] !== undefined ){
				return transitions[t];
			}
		}
	}
	/* 监听变换事件! */
	var transitionEvent = whichTransitionEvent();
	transitionEvent && e.addEventListener(transitionEvent, function() {
		for(var i=0;i<lis.length;i++){
			list[i]=getRandNum();
			lis[i].innerHTML =list[i];
			value[i]=list[i];
		}
		
	});
	/*******************以上一小部分为css动画结束检测**********************************/
	
	
	function getRandNum(){//得到不重复的随机值
    var i=-1;
    while(i==-1||!conin(i)){
			i= Math.floor(Math.random()*16)+1;
		}
		/*document.writeln(i);*/
		return i;
	}
	function conin(n){
		for(var i=0;i<list.length;i++){
			if(n==list[i]){
				return false;
			}
		}
		return true;
	}
	
	addLoadEvent(action);
	
	right = function() {
		e.className+= ' hide';
	}

	var timer;
	var secondTime=-1;
	function changeTime()
	{
		secondTime++;
		document.getElementById('second').innerHTML=secondTime;	
			timer = setTimeout("changeTime();",1000);//调用自身实现
		return secondTime;
	}//计时器
	
	
	