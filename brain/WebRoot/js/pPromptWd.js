// 使用时调用createPrompt()即可
//在主js文件中声明link
var fs_wrapper=document.getElementById('fs_wrapper'); 
var fsWrapperW=parseInt(fs_wrapper.offsetWidth );  
var fsWrapperH=parseInt(fs_wrapper.offsetHeight); 
function createPrompt()
{
    var divSp = document.createElement("div");    //弹出对话框
    var newMask = document.createElement("div");  //遮罩层，用来屏蔽灰掉背部界面
    var btnSub = document.createElement("input"); // 弹出对话框中按钮
    var btnReturn = document.createElement("input"); // 弹出对话框中按钮
    var inner;
    // 弹出对话框中要呈现的页面元素布局等html代码
    inner = '<div class="fieldset" style="height:300px  background:#A9A9A9">';
    inner += ' <div class="tipsColor" style="text-align:left;padding-top:5px;padding-left:12px;padding-bottom:5px; color:#fff;">';
    inner += ' <span>提示：</span>';
    inner += ' </div>';
	inner += ' <div style=" margin-top:5px; font-size:15px; font-weight:bolder; text-align:center;color:#333;">';
    inner += ' <span>游戏结束！</span><br/><br/>';
	inner += score+'<br/><br/>';
	inner += ' </div>';
    inner += '</div>';
	
    // 创建弹出层 遮罩层 等 
    if ( !document.getElementById("mask") && 1)
    {      
        newMask.id = "mask";
        newMask.style.position = "absolute";
        newMask.style.zIndex = "1";		
        newMask.style.width =parseInt(fs_wrapper.offsetWidth )+ "px";		
        newMask.style.height =parseInt(fs_wrapper.offsetHeight )+ "px";
        newMask.style.top =fs_wrapper.offsetTop+'px';
        newMask.style.left =fs_wrapper.offsetLeft+'px';
        newMask.style.background = "gray";
        newMask.style.filter = "alpha(opacity=80)";
        newMask.style.opacity = "0.7";
        document.body.appendChild(newMask);      
    }	
	//弹出框
    if ( !document.getElementById("promptID"))
    {
        divSp.setAttribute("id", "promptID");
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
	   fs_wrapper.appendChild(divSp);
        openDiv();
    } 
	
    if ( !document.getElementById("btnSubID"))
    {
        btnSub.setAttribute("id", "btnSubID");
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
          document.getElementById("promptID").style.display = "none";
		  document.getElementById("mask").style.display = "none";
		  window.location.href=link;			
        };
        document.getElementById("promptID").appendChild(btnSub);
    }   
    if ( !document.getElementById("returnID"))
    {
        btnReturn.setAttribute("id", "returnID");
        btnReturn.setAttribute("class", "tipsColor");
        btnReturn.type = "button";
        btnReturn.style.width =parseInt(divSp.offsetWidth )*0.3+ "px";
        btnReturn.style.paddingLeft = "15px";
        btnReturn.style.paddingRight = "15px"; 
        btnReturn.style.paddingTop = "5px"; 
        btnReturn.style.paddingBottom = "5px"; 
        btnReturn.style.fontSize="15px";
        btnReturn.style.color="#fff";
        btnReturn.style.fontWeight="bolder";
        btnReturn.style.borderRadius = "3px";
        btnReturn.value = "退出";
        btnReturn.onclick = function(){
        	window.location.href="/brain/home/index.jsp";
        };
        document.getElementById("promptID").appendChild(btnReturn);
    }   
}
// 调整弹出对话框宽度和高度
function openDiv()
{
    var divPrompt = document.getElementById("promptID");
	viewWidth=fsWrapperW*0.5;
	viewHeight=fsWrapperH*0.30;
    divPrompt.style.width=viewWidth + "px";  
    divPrompt.style.height=viewHeight + "px";
}























