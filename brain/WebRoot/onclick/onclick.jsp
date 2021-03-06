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
	<link type="text/css" href="onclick/css/onclick.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">

<div class="quiz-heading">
	<img id="pic-click" alt="数学" class="badge-image" src="onclick/img/onclick.jpg">
	<h2>点击白点</h2>
	<p class="light">
		<a>反应能力</a>
	</p>
	<div class="avrgeScoreCla">
		今日平均分:<span id="avrScoreID" ></span>
	</div>
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>灵活的反应能力</p>
		<!-- <p>精确地数值判断能力</p>
		<p>心算能力</p> -->
	</div>

<!-- <div id="game" class="middle">
    	<div id="content_top">
        	<span class="head-left">
        		<span>轮数：</span><span id="times"></span>
        		<span>耗时：</span><span id="second"></span>
            	<span>得分：</span><span id="score"></span>
            </span>
           
        </div> -->
<div id="game">
    <div id="fs_wrapper">
        <div id="makeCenter">
            <div id="gameInfo" class="gameInfo_style">
              	  耗时：<span id="second">0</span>
                <span class="verticalLine">|</span>
            	    得分：<span id="scoreID">0</span>
            	<span class="verticalLine">|</span>
            	    剩余轮数：<span id="frequencyID">15</span>
            </div>
        </div>
        <div id="game-sum">
        	<div >
        		<span id="clickID" class="clickCla"></span>
        	</div> 
        	<div id="content_right">
        		<div id="outIsRightID">
        			<div id="isRightID"></div>
        		</div>
        	</div>
        	<button id="OKBtnID" class="btnStyle isOK"></button>
        </div>	
       
        
    </div>
    <div id="game_footer">
            <img id="help" class="setPic" src="img/266-question.png" />&nbsp;&nbsp;
           <!--  <img id="off" class="setPic" src="img/286-pause2.png" />&nbsp;&nbsp; -->
          <!--   <img id="voice" class="setPic" src="img/296-volume-medium.png" />     -->       
    </div>
</div>

<div class="gametips">
       <a href="/brain/onclick/onclick.jsp#game-help" class="gametips-heading"> 游戏介绍与帮助</a>
       <div id="game-help" class="gametips-details">
            <h5>基本操作&游戏帮助</h5>
            <p>游戏开始后会出现一个黑点,几秒之后变白点，当它变白时点击，速度越快越好，共15轮。</p>
            <hr>
            <h5>游戏介绍</h5>
            <p>点击白点可以训练你的反应能力。</p>
        </div>
</div>

</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="onclick/js/onclick.js"></script>
    <script src="js/pPromptWd.js"></script>  
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>