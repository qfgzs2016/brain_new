// JavaScript Document
var jushu=0;//局数
var timer;//计时器
var secondTime =-1;
var rdn = 1;//判断是否点击正确，及一局的
var list = new Array();
var lis = document.getElementsByTagName("li");
function init(){
	document.getElementById("jushu").innerHTML=jushu; 
	document.getElementById('second').innerHTML ="0"; 
	document.getElementById('again').style.display='none';	
	document.getElementById('nextNum').style.display='none';	
	
}
addLoadEvent(init);
function action() {
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
			 for (var j = 1; j <=lis.length; j++) {
				 if(rdn-1== list[j-1]){
					 document.getElementById(j).style.backgroundColor='#0F0';
					 document.getElementById(j).style.borderColor='#0F0';
				 }
			 }
			lastNum=parseInt(this.getAttribute("id"));
            if (rdn == list[parseInt(this.getAttribute("id")) - 1]) {
				rdn++;
				if(rdn==17){
					document.getElementById('tips').innerHTML ='结束啦!';	
				}
				else{
					document.getElementById('tips').innerHTML =rdn;	
				}
							
				this.style.backgroundColor='#ff0';
				this.style.borderColor='#ff0';
                if (rdn ==17) {//结束一局
				clearInterval(timer);                              
                   $.ajax({
                        url: "servlet/SaveNumberSortServlet",
                        type: "POST",
                        data: {
                            clickTime: secondTime
                        },
                        dataType: "json",
                        success: function(result) {
                            if (result.code == 1) {
                                //跳转到显示游戏结束结果页面        
                            	
                                }
                            else {
                                //再玩一次，，正常情况不能出现
                                }

                        }

                    });
					alert("游戏结束！");
                }
            }
            else {
                alert("错了");
            }  
        }	
    }  
}

document.getElementById('start').onclick=function(){
	document.getElementById("jushu").innerHTML=++jushu;
	document.getElementById('start').style.display='none';	
	document.getElementById('again').style.display='inline';
	document.getElementById('nextNum').style.display='inline';	
	document.getElementById('tips').innerHTML ="1"; 	
    e.className = "fanzhuan";
    for (var i = 1; i < lis.length; i++) {
        lis[i].className = "fanzhuan";
    }
}

document.getElementById('again').onclick=function(){
	if(rdn<17){
		document.getElementById("jushu").innerHTML=jushu;   
	}
	else{
		document.getElementById("jushu").innerHTML=++jushu;   
	}
	 if(timer){
		clearInterval(timer);           
	 }
    secondTime=-1;
	rdn = 1;
	document.getElementById('tips').innerHTML ="1"; 	
	for (var j =0; j < lis.length; j++) {
		if(lis[j].classList.contains('fanzhuan')){
			lis[j].classList.remove("fanzhuan");
		}
		else{
			lis[j].classList.add("fanzhuan");
		}
		lis[j].style.backgroundColor='#0F0';
		lis[j].style.borderColor='#0F0';
		document.getElementById(j+1).innerHTML ="";
     }
}
/*******************以下一小部分为css动画结束检测**********************************/
var e = document.getElementById('1');
function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    }
    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}
/* 监听变换事件! */
var transitionEvent = whichTransitionEvent();
transitionEvent && e.addEventListener(transitionEvent, 
function() {//css动画完成代码段
	for (var i = 0; i < lis.length; i++) {
        list[i] = 0;
    }
    for (var i = 0; i < lis.length; i++) {
        list[i] = getRandNum();
		/*console.log("list["+i+"]: "+list[i]);*/
        lis[i].innerHTML = list[i];
    }
	/*console.log("16个");*/
	action();
	changeTime();  
});
/*******************以上一小部分为css动画结束检测**********************************/


function getRandNum() {
    //得到不重复的随机值
    var i = -1;
    while (i == -1 || !conin(i)) {
        i = Math.floor(Math.random() * 16) + 1;

    }
    return i;
}
function conin(n) {
    for (var i = 0; i < list.length; i++) {
        if (n == list[i]) {
            return false;
        }
    }
    return true;
}

function changeTime()//计时器
 {
    secondTime++;
    document.getElementById('second').innerHTML = secondTime;
    timer = setTimeout("changeTime();", 1000);
    //调用自身实现
    return secondTime;
}

right = function() {
    e.className += ' hide';
}