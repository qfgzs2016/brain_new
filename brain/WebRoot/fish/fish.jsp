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

<div class="quiz-heading">
           <img alt="鱼儿" class="badge-image" id="pic-fish" src="fish/img/fish.jpg">
           <h2>鱼翔泉底</h2>
           <p class="light">
           		<a>方向感</a>
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
         <div id="indexID">
            <img src="fish/img/fishBg02.png" class="indexBgCla" /><br />
            <button id="startBtnID" class="startBtnCla btnStyle">开始</button> 
         </div>
         
        <div id="actionArea"></div>
   
   
    <ul id="fourBtnID">
        		<li class="frwBtnCla"></li>
        		<li class="frwBtnCla"> <img id="upBtnID" class="forwardBtnCla" src="fish/img/arrow-up.png" /></li>
        		<li class="frwBtnCla"></li>
        		<li class="frwBtnCla"><img id="leftBtnID" class="forwardBtnCla" src="fish/img/arrow-left.png" /></li>
        		<li class="frwBtnCla"></li>
        		<li class="frwBtnCla"><img id="rightBtnID" class="forwardBtnCla" src="fish/img/arrow-right.png" /></li>
        		<li class="frwBtnCla"></li>
        		<li class="frwBtnCla"><img id="downBtnID" class="forwardBtnCla" src="fish/img/arrow-down.png" /></li>
        		<li class="frwBtnCla"></li>
    </ul>
     </div>
    <div id="game_footer">
    	<img id="help" class="setPic" src="fish/img/266-question.png" />&nbsp;&nbsp;
        <img id="off" class="setPic" src="fish/img/285-play3.png" />&nbsp;&nbsp;
        <img id="voice" class="setPic" src="fish/img/296-volume-medium.png" />           
    </div>
</div>

<div class="gametips">
          <a href="fish/fish.jsp#game-help" class="gametips-heading"> 游戏介绍与帮助   </a>
          <div id="game-help" class="gametips-details">
              <h5>基本操作&游戏帮助</h5>
              <p>一群鱼会出现在海底，快速找出游错方向的鱼，并迅速在上下左右按钮上点击选中它游错的方向。你的反应越快最终得分越高</p>
              <hr>
              <h5>游戏介绍</h5>
              <p>鱼翔泉底，需要你做出正确的判断。它训练的是你的方向辨别能力。</p>
          </div>
</div>



</Layout:overwrite>
<Layout:overwrite name="MyScript">
<script src="js/currency.js"></script>
<script src="fish/js/fish.js"></script>
<script src="js/pPromptWd.js"></script>
</Layout:overwrite>
<%@ include file="/share/_Layout.jsp"%>