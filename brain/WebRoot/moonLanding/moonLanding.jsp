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
<link type="text/css" href="moonLanding/css/moonLanding.css" rel="stylesheet" />
 </Layout:overwrite> 

<Layout:overwrite name="MyContent">
<div id="game">
    <div id="fs_wrapper">   
          <div id="gameInfoID" class="gameInfo_style">
               时间：0:<span id="second">45</span>
               <span class="verticalLine">|</span>
               得分：<span id="score">0</span>
          </div>
         
    </div>
    
    <canvas id="moon_canvas" width="620" height="560"></canvas>
    <div id="disFourBtn">
    	<button id="1" class="btnStyle">1</button>
        <button id="2" class="btnStyle">2</button>
        <button id="3" class="btnStyle">3</button>
        <button id="4" class="btnStyle">4</button>
    </div>
    <div id="game_footer">
    	<img id="help" class="setPic" src="moonLanding/img/266-question.png" />&nbsp;&nbsp;
        <img id="off" class="setPic" src="moonLanding/img/286-pause2.png" />&nbsp;&nbsp;
        <img id="voice" class="setPic" src="moonLanding/img/296-volume-medium.png" />           
    </div>
</div>


</Layout:overwrite>
<Layout:overwrite name="MyScript">
<script src="js/currency.js"></script>
<script src="moonLanding/js/moonLanding.js"></script>
<script src="js/pPromptWd.js"></script>
</Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>