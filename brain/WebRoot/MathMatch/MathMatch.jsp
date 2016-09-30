<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
<Layout:overwrite name="Mycss">
	  <link type="text/css" href="MathMatch/css/MathMatch.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div id="content_bg">
    	<div id="content_top">
        	<span>轮数：</span><span id="times"></span>&nbsp;&nbsp;&nbsp;
        	<span>耗时：</span><span id="second"></span>&nbsp;&nbsp;&nbsp;
            <span>得分：</span><span id="score"></span>
        </div>
    	<div id="content_main">
        	<div id="content_left"><span id="content_left_text" class="content_text">16</span></div>
        	<div id="content_right"><span id="content_right_text" class="content_text">18</span></div>
        </div>  
        <div id="content_footer">
            <button id="more">大于</button>
            <button id="less">小于</button>
   		 </div> 	
 </div>
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="MathMatch/js/MathMatch.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>