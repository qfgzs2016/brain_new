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

<div class="quiz-heading">
           <img alt="月球" class="badge-image" id="pic-moon" src="moonLanding/img/Moonlogin.jpg">
           <h2>月球登陆</h2>
           <p class="light">
           		<a>感知力</a>
           </p>
            <div class="avrgeScoreCla">
          		今日平均分:<span id="avrScoreID" ></span>
           </div>
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>更敏捷的思维</p>
		<p>更短的反应时间</p>
		<p>认知处理过程</p>
</div>
<div id="game">
    <div id="fs_wrapper">   
         <div id="gameInfoID" class="gameInfo_style">
             	  时间：0:<span id="second">45</span>
               <span class="verticalLine">|</span>
            	   得分：<span id="score">0</span>
         </div>
   		<canvas id="moon_canvas" width="620" height="560"></canvas>
         <div id="disFourBtn">
            <button id="1" class="btnStyle">1</button>
            <button id="2" class="btnStyle">2</button>
            <button id="3" class="btnStyle">3</button>
            <button id="4" class="btnStyle">4</button>
    	</div>
    </div>
   
   <div id="game_footer">
    	<img id="help" class="setPic" src="moonLanding/img/266-question.png" />&nbsp;&nbsp;
        <img id="off" class="setPic" src="moonLanding/img/286-pause2.png" />&nbsp;&nbsp;
        <img id="voice" class="setPic" src="moonLanding/img/296-volume-medium.png" />           
    </div>
</div>
<div class="gametips">
          <a href="moonLanding/moonLanding.jsp#game-help" class="gametips-heading"> 游戏介绍与帮助   </a>
          <div id="game-help" class="gametips-details">
              <h5>基本操作&游戏帮助</h5>
              <p>游戏开始会出现一个宇航员和一个绿色圆形，请根据给的标尺判断宇航员与圆形的距离，在下面做出选择</p>
              <hr>
              <h5>游戏介绍</h5>
              <p>月球登陆，需要你做出正确的判断。它训练的是你的预估能力。</p>
          </div>
</div>

</Layout:overwrite>
<Layout:overwrite name="MyScript">
<script src="js/currency.js"></script>
<script src="moonLanding/js/moonLanding.js"></script>
<script src="js/pPromptWd.js"></script>
</Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>