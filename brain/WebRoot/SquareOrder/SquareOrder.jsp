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
	<link type="text/css" href="SquareOrder/css/SquareOrder.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">
    <div id="fs_wrapper">
        <div id="fs_header_wrapper" class="gameInfo_style">
        	<span >纸牌顺序</span>&nbsp;
            <span >第</span><span id="jushu"></span>局&nbsp;
            <span >耗时：</span><span id="second"></span>ms
        </div>
        <div id="fs_main_wrapper">
            <ul>   
                <li id="1"></li>
                <li id="2"></li>
                <li id="3"></li>
                <li id="4"></li>
                <li id="5"></li>
                <li id="6"></li>
                <li id="7"></li>
                <li id="8"></li>
                <li id="9"></li>
                <li id="10"></li>
                <li id="11"></li>
                <li id="12"></li>
                <li id="13"></li>
                <li id="14"></li>
                <li id="15"></li>
                <li id="16"></li>
            </ul>
        </div>
        <div id="fs_footer_wrapper">
        	<div id="nextNum" class="gameInfo_style">请点击方块：<span id="tips"></span></div>
        	<div class="twoButton">
                <button id="start" class="start_button">开始</button>
                <button id="again" class="again_button">再来一次</button>
            </div>
        </div>
    </div>
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="SquareOrder/js/SquareOrder.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>