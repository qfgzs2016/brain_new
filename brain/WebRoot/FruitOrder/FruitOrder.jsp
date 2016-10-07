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
	  <link type="text/css" href="FruitOrder/css/FruitOrder.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div id="fs_wrapper">
	<div id="fs_header_wrapper" class="gameInfo_style">
         <span>轮数：</span><span id="times"></span>&nbsp;
         <span>耗时：</span><span id="second"></span>&nbsp;
         <span>得分：</span><span id="score"></span>
    </div>	
	<div id="fs_main_wrapper">
		<ul>   
            <li id="1"><img src="FruitOrder/image/3.jpg" /></li>
            <li id="2"><img src="FruitOrder/image/2.jpg" /></li>
            <li id="3"><img src="FruitOrder/image/0.jpg" /></li>
            <li id="4"><img src="FruitOrder/image/2.jpg" /></li>
            <li id="5"><img src="FruitOrder/image/0.jpg" /></li>
            <li id="6"><img src="FruitOrder/image/3.jpg" /></li>
            <li id="7"><img src="FruitOrder/image/1.jpg" /></li>
            <li id="8"><img src="FruitOrder/image/0.jpg" /></li>
            <li id="9"><img src="FruitOrder/image/2.jpg" /></li>
    	</ul>
	</div>
    <div id="fs_footer_wrapper">
    	<button id="start" class="start_button">开始游戏</button>
        <button id="again" class="again_button">再来一次</button>    	
    </div>
</div>
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="FruitOrder/js/FruitOrder.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>