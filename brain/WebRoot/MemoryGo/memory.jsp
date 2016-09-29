<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
 <Layout:overwrite name="Mycss">
 	<link type="text/css" href="css/MemoryGo.css" rel="stylesheet" />
 </Layout:overwrite> 

<Layout:overwrite name="MyContent">
<div id="top">记忆围棋</div>
    <div id="info">
    	<span>date:</span><span id="date"></span>
    	<span>level:</span><span id="level"></span>
        <span>score:</span><span id="score"></span>
    </div>
<canvas id="menoryGo_canvas" width="800" height="600"></canvas>
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="./js/currency.js"></script>
	<script src="MemoryGo/js/MemoryGo.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>