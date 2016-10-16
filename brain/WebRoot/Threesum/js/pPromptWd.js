// 使用时调用createPrompt()即可
function createPrompt()
{
    var divSp = document.createElement("div");    //弹出对话框
    var newMask = document.createElement("div");  //遮罩层，用来屏蔽灰掉背部界面
    var btnSub = document.createElement("input"); // 弹出对话框中按钮
    var inner;

    // 弹出对话框中要呈现的页面元素布局等html代码
    inner = '<div class="fieldset" style="height:300px  background:#A9A9A9">';
    inner += ' <div class="tipsColor" style="padding-top:5px;padding-left:15px;padding-bottom:5px; color:#fff;">';
    inner += ' <p>提示：</p>';
    inner += ' </div>';
	inner += ' <div style=" margin-top:20px; font-size:15px; font-weight:bolder; text-align:center;color:#333;">';
    inner += ' <span>恭喜你,游戏结束！</span><br/>';
	inner += score+'<br/>';
	inner += ' </div>';
    inner += '</div>';
	
    // 创建弹出层 遮罩层 等 
    if ( !document.getElementById("mask") && 1)
    {      
        var fs_wrapper=document.getElementById('fs_wrapper');   
        newMask.id = "mask";
        newMask.style.position = "absolute";
        newMask.style.zIndex = "1";
        newMask.style.width =parseInt(fs_wrapper.offsetWidth )+'px';
        newMask.style.height =parseInt(fs_wrapper.offsetHeight )+'px';
        newMask.style.top =fs_wrapper.offsetTop+'px';
        newMask.style.left =fs_wrapper.offsetLeft+'px';
        newMask.style.background = "gray";
        newMask.style.filter = "alpha(opacity=80)";
        newMask.style.opacity = "0.7";
        document.body.appendChild(newMask);      
    }
    if ( !document.getElementById("promptID"))
    {
        divSp.setAttribute("id", "promptID");
		divSp.setAttribute("margin", "20px");
        divSp.style.position = "absolute";
        /*divSp.style.padding = "15px";*/
        divSp.style.width = "0px";//后面有设置
        divSp.style.height = "0px";
        divSp.style.zIndex = "5000"; 
        divSp.style.top = parseInt(window.screen.height * 0.21)+document.body.scrollTop+document.documentElement.scrollTop + 30 + "px";
        divSp.style.left = parseInt(document.body.offsetWidth * 0.39)+document.body.scrollLeft+document.documentElement.scrollLeft + "px";
		/*divSp.style.top = parseInt(80) + "px";
        divSp.style.left = parseInt(90) + "px";*/
       /* divSp.style.border = "2px s #576999";*/
        divSp.style.backgroundColor = "#fff";
        divSp.innerHTML = inner;
        newMask.appendChild(divSp);
        openDiv();
    } 
	
	var pop=document.getElementById("promptID");
	document.body.appendChild(pop);
	
    if ( !document.getElementById("btnSubID"))
    {
        btnSub.setAttribute("id", "btnSubID");
        btnSub.setAttribute("class", "tipsColor");
        btnSub.type = "button";
        btnSub.style.width = "100px";
        btnSub.style.position = "absolute";
        btnSub.style.top = "67%";
        btnSub.style.left = "37%"; 
		btnSub.style.paddingLeft = "15px";
		btnSub.style.paddingRight = "15px"; 
		btnSub.style.paddingTop = "5px"; 
		btnSub.style.paddingBottom = "5px"; 
		btnSub.style.fontSize="15px";
		btnSub.style.color="#fff";
		btnSub.style.fontWeight="bolder";
		btnSub.style.borderRadius = "3px";
		/*btnSub.style.border = "1px solid #0c0";*/
        btnSub.value = "继续";
        btnSub.onclick = function(){
          document.getElementById("promptID").style.display = "none";
		  document.getElementById("mask").style.display = "none";
		  window.location.href="Mahjong/Mahjong.jsp";			
        };
        document.getElementById("promptID").appendChild(btnSub);
    }    
}
// 调整弹出对话框宽度和高度
function openDiv()
{
    var divPrompt = document.getElementById("promptID");
    
    var viewWidth = parseInt(document.body.offsetWidth * 0.37);
    var viewHeight = parseInt(window.screen.height  * 0.18);

    if (viewWidth < 460 || viewWidth > 500)
    {
        viewWidth = 300;
    }
 
    if (viewHeight < 180 || viewHeight > 240)
    {
        viewHeight = 150;
    }
    divPrompt.style.width=viewWidth + "px";  
    divPrompt.style.height=viewHeight + "px";
}























