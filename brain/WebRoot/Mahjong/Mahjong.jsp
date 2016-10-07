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
	<link type="text/css" href="Mahjong/css/MahjongMatch.css" rel="stylesheet" />
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div id="fs_wrapper">
        <div id="fs_header_wrapper" class="gameInfo_style">
       		<span>麻将识别</span>&nbsp;
            <span>剩余时间：</span><span id="second"></span>&nbsp;
            <span>得分：</span><span id="score"></span>&nbsp;
        </div>
        <canvas id="mahjongMatch_canvas" width="600" height="400"></canvas>
        <div id="fs_footer_wrapper">
        	<button id="start" class="start_button">开始游戏</button>
            <button id="same" class="same_button">相同</button>
            <button id="different" class="different_button">不相同</button>
            <button id="again" class="again_button">再来一次</button>
        </div>
        <div id="cover"></div>
 </div>

</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="./js/currency.js"></script>
    <script src="Mahjong/js/MahjongMatch.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>