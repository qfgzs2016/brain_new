// 使用时调用createtips()即可
//在主js文件中声明link

function createtips(str,pareID,tipsAction)
{
	var pare=document.getElementById(pareID); 
	var fsWrapperW=parseInt(pare.offsetWidth );  
	var fsWrapperH=parseInt(pare.offsetHeight);
    var divSp = document.createElement("div");    //弹出对话框
    var newMask = document.createElement("div");  //遮罩层，用来屏蔽灰掉背部界面
    var btnSub = document.createElement("input"); // 弹出对话框中按钮
    var inner;
    // 弹出对话框中要呈现的页面元素布局等html代码
    inner = '<div class="fieldset" style="height:300px  background:#A9A9A9">';
    inner += ' <div class="tipsColor" style="text-align:left;padding-top:5px;padding-left:12px;padding-bottom:5px; color:#fff;">';
    inner += ' <span>提示：</span>';
    inner += ' </div>';
	inner += ' <div style=" margin-top:5px; font-size:15px; font-weight:bolder; text-align:center;color:#333;">';
    inner += ' <br/><span>'+str+'</span><br/><br/>';
	inner += ' </div>';
    inner += '</div>';
	
    // 创建弹出层 遮罩层 等 
    if ( !document.getElementById('maskID') && 1)
    {      
        newMask.id = 'maskID';
        newMask.style.position = "absolute";
        newMask.style.zIndex = "1";		
        newMask.style.width =parseInt(pare.offsetWidth )+ "px";		
        newMask.style.height =parseInt(pare.offsetHeight )+ "px";
        newMask.style.top =pare.offsetTop+'px';
        newMask.style.left =pare.offsetLeft+'px';
        newMask.style.background = "gray";
        newMask.style.filter = "alpha(opacity=80)";
        newMask.style.opacity = "0.7";
        document.body.appendChild(newMask);      
    }	
	//弹出框
    if ( !document.getElementById('promptID'))
    {
        divSp.setAttribute("id", 'promptID');
		divSp.setAttribute("margin", "20px");
        divSp.style.position = "absolute";
        divSp.style.width = "0px";//后面有设置
        divSp.style.height = "0px";
        divSp.style.zIndex = "500";
		divSp.style.top ="25%";
		divSp.style.left ="25%";
        divSp.style.backgroundColor = "#fff";
        divSp.innerHTML = inner;
      /*  newMask.appendChild(divSp);*/
	   pare.appendChild(divSp);
	   openDiv('promptID',fsWrapperW,fsWrapperH);
    } 
	
    if ( !document.getElementById('btnSubID'))
    {
        btnSub.setAttribute("id", 'btnSubID');
        btnSub.setAttribute("class", "tipsColor");
        btnSub.type = "button";
        btnSub.style.width =parseInt(divSp.offsetWidth )*0.3+ "px";
		btnSub.style.paddingLeft = "15px";
		btnSub.style.paddingRight = "15px"; 
		btnSub.style.paddingTop = "5px"; 
		btnSub.style.paddingBottom = "5px"; 
		btnSub.style.fontSize="15px";
		btnSub.style.color="#fff";
		btnSub.style.fontWeight="bolder";
		btnSub.style.borderRadius = "3px";
        btnSub.value = "继续";
        btnSub.onclick = function(){
        	divSp.removeChild(btnSub);
        	pare.removeChild(divSp);
        	document.body.removeChild(newMask);
        	tipsAction();
        };
        document.getElementById('promptID').appendChild(btnSub);
    }   
    else{
    }
}
// 调整弹出对话框宽度和高度
function openDiv(promptID,fsWrapperW,fsWrapperH)
{
    var divPrompt = document.getElementById(promptID);
	viewWidth=fsWrapperW*0.5;
	viewHeight=fsWrapperH*0.28;
	if(viewHeight<500){
		viewHeight=viewHeight*1.3;
	}
	else{
		
	}
    divPrompt.style.width=viewWidth + "px";  
    divPrompt.style.height=viewHeight + "px";
}























