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
 	<link type="text/css" href="MemoryGo/css/MemoryGo.css" rel="stylesheet" />
 </Layout:overwrite> 

<Layout:overwrite name="MyContent">
<div id="fs_wrapper">
	<p id="message">你能记住吗？？？</p>
	<!--<img id="pic" src="../image/memoryGo.jpg" width="400" height="300" />-->
    <div id="info">
    	<div id="fs_header_wrapper" class="gameInfo_style">
       		<!--<span>date:</span><span id="date"></span>-->
            <span>记忆围棋</span>&nbsp;
            <span>等级:</span><span id="level"></span>&nbsp;
            <span>得分:</span><span id="score"></span>
        </div>
    </div>
	<canvas id="menoryGo_canvas" width="700" height="500"></canvas>
	<div id="fs_footer_wrapper">
        <button id="start" class="start_button">开始游戏</button>
        <button id="again" class="again_button">重来</button>
    </div>   
</div>
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="./js/currency.js"></script>
	<script src="MemoryGo/js/MemoryGo.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>