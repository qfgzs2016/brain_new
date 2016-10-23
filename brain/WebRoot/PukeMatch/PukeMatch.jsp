<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
 <Layout:overwrite name="Mycss">
 	<link type="text/css" href="PukeMatch/css/PukeMatch.css" rel="stylesheet" />
	<link type="text/css" href="css/currency.css" rel="stylesheet" />
	<link type="text/css" href="css/headGame.css" rel="stylesheet" />
 </Layout:overwrite> 

<Layout:overwrite name="MyContent">

<div class="quiz-heading">
           <img alt="颜色" class="badge-image" id="pic-puke" src="PukeMatch/img/PukeMatch.png">
           <h2>扑克匹配</h2>
           <p class="light">
           		<a>认知速度</a>
           </p>
           <div class="avrgeScoreCla">
          		今日平均分:<span id="avrScoreID" ></span>
           </div>
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>更敏捷的思维</p>
		<p>更短的反应时间</p>
		<p>加速认知处理过程</p>
	</div>

<div id="game">
    <div id="fs_wrapper">
        <div id="makeCenter">
            <div id="gameInfo" class="gameInfo_style">
                时间：0:<span id="second">45</span>
                <span class="verticalLine">|</span>
                得分：<span id="score">0</span>
            </div>
        </div>
        <div id="whiteBoard" class="reflection">
            <div id="pukeid"><div id="pk" class="puke"></div></div>
        </div>
        <div id="someBtn">
            <button id="startBtnID" class="startBtnCla btnStyle">开始</button>
            <button id="diffBtnID" class="diffBtnCla btnStyle">不相同</button>
            <button id="sameBtnID" class="sameBtnCla btnStyle">相同</button>
        </div>
        
    </div>
    <div id="game_footer">
            <img id="help" class="setPic" src="img/266-question.png" />&nbsp;&nbsp;
            <img id="off" class="setPic" src="img/285-play3.png" />&nbsp;&nbsp;
            <img id="voice" class="setPic" src="img/296-volume-medium.png" />           
    </div>
</div>
	
<div class="gametips">
      <a href="PukeMatch/PukeMatch.jsp#game-help" class="gametips-heading"> 游戏介绍与帮助   </a>
          <div id="game-help" class="gametips-details">
              <h5>基本操作&游戏帮助</h5>
              <p>游戏开始前会出现一张扑克花色，请记住它的花色，并下一张出现的扑克花色图片比较是否相同。</p>
              <hr>
              <h5>游戏介绍</h5>
          <p>扑克匹配，需要你在极短的时间内做出正确的判断。它训练的是你的反应速度。你的反应越快，接受新事物、适应新环境的能力就越强。因此，这是一切智力提升的前提。练好快速匹配，才能拥有高效的学习和思维能力。</p>
      </div>
</div>

</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="js/currency.js"></script>
    <script src="js/pPromptWd.js"></script>
    <script src="PukeMatch/js/PukeMatch.js"></script>
 </Layout:overwrite>
<%@ include file="/share/_Layout.jsp"%>