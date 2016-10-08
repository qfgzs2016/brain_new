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
	<link type="text/css" href="MathMatch/css/MathMatch.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div id="fs_wrapper">
	<div id="fs_header_wrapper" class="gameInfo_style">
    	<span>数字比武</span>&nbsp;
        <span>轮数：</span><span id="times"></span>&nbsp;
        <span>耗时：</span><span id="second"></span>&nbsp;
        <span>得分：</span><span id="score"></span>
    </div>
	<div id="content_bg">
    	<div id="content_main">
        	<div id="content_left"><span id="content_left_text" class="content_text">0</span></div>
        	<div id="content_right"><span id="content_right_text" class="content_text">0</span></div>
        </div>  
        <div id="content_footer">
            <button id="more_button">＞</button>
            <button id="less_button">＜</button>
   		</div> 	
    </div>
    <div id="fs_footer_wrapper">
    	<button id="start" class="start_button">开始游戏</button>
        <button id="again" class="again_button">重来</button>    	
    </div>
</div>   
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="MathMatch/js/MathMatch.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>