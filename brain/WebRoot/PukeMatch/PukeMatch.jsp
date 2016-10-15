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
            <button id="startBtn" class="start btnStyle">开始</button>
            <button id="differenceBtn" class="difference btnStyle">不相同</button>
            <button id="sameBtn" class="same btnStyle">相同</button>
        </div>
        
    </div>
    <div id="game_footer">
            <img id="help" class="setPic" src="img/266-question.png" />&nbsp;&nbsp;
            <img id="off" class="setPic" src="img/286-pause2.png" />&nbsp;&nbsp;
            <img id="voice" class="setPic" src="img/296-volume-medium.png" />           
    </div>
</div>
	


</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="js/currency.js"></script>
    <script src="PukeMatch/js/pPromptWd.js"></script>
    <script src="PukeMatch/js/PukeMatch.js"></script>
 </Layout:overwrite>
<%@ include file="/share/_Layout.jsp"%>