<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练2
</Layout:overwrite>
<Layout:overwrite name="Mycss">
	<link type="text/css" href="Mahjong/css/MahjongMatch.css" rel="stylesheet" />
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div id="info">
    	<span>时间：</span><span id="second"></span>
    	<span>得分：</span><span id="score"></span>
    </div>
	<canvas id="mahjongMatch_canvas" width="800" height="400"></canvas>
    <div id="client_area">
    	<button id="agree" class="btn_one">相同</button>
        <button id="disagree" class="btn_one">不相同</button>
    </div>
    <div id="cover"></div>


</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="./js/currency.js"></script>
    <script src="Mahjong/js/MahjongMatch.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>