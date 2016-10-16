<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
<Layout:overwrite name="Mycss">
<link type="text/css" href="css/currency.css" rel="stylesheet" />
<link type="text/css" href="css/headGame.css" rel="stylesheet" />
<link type="text/css" href="fish/css/fish.css" rel="stylesheet" />
</Layout:overwrite> 

<Layout:overwrite name="MyContent">
<div id="game">
    <div id="fs_wrapper">   
          <div id="gameInfoID" class="gameInfo_style">
               时间：0:<span id="second">45</span>
               <span class="verticalLine">|</span>
               得分：<span id="score">0</span>
          </div>
         <div id="indexID">
            <img src="fish/img/fishBg02.png" class="indexBgCla" /><br />
            <button id="startBtnID" class="startBtnCla btnStyle">开始</button> 
         </div>
         
        <div id="actionArea"></div>

        
        <div id="fourBtnID">
             <img id="upBtnID" class="forwardBtnCla" src="fish/img/arrow-up.png" />
             <img id="rightBtnID" class="forwardBtnCla" src="fish/img/arrow-right.png" />
             <img id="downBtnID" class="forwardBtnCla" src="fish/img/arrow-down.png" />
             <img id="leftBtnID" class="forwardBtnCla" src="fish/img/arrow-left.png" />
         </div>
    </div>
    <div id="game_footer">
    	<img id="help" class="setPic" src="fish/img/266-question.png" />&nbsp;&nbsp;
        <img id="off" class="setPic" src="fish/img/286-pause2.png" />&nbsp;&nbsp;
        <img id="voice" class="setPic" src="fish/img/296-volume-medium.png" />           
    </div>
</div>

</Layout:overwrite>
<Layout:overwrite name="MyScript">
<script src="js/currency.js"></script>
<script src="fish/js/fish.js"></script>
<script src="js/pPromptWd.js"></script>
</Layout:overwrite>
<%@ include file="/share/_Layout.jsp"%>