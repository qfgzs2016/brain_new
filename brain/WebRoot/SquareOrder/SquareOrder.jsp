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
	<div class="quiz-heading">
           <img alt="方格" class="badge-image" src="img/check.png">
           <h2>方格排序</h2>
           <p class="light">
           		<a>注意力</a>
           </p>
          	
    </div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>周边事物观察力</p>
		<p>加大视幅范围</p>
		<p>精神集中力</p>
	</div>


    <div id="fs_wrapper">
    	
        <div id="fs_header_wrapper" class="gameInfo_style">
            <span class="jushu" >第</span><span id="jushu"></span>局&nbsp;
            <span class="second" >耗时：</span><span id="second"></span>s
            <span class="squarescore">今日平均耗时:<span class="square-score"></span></span>
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
                <button id="start" class="start_button btnStyle">开始</button>
                <button id="again" class="again_button btnStyle">再来一次</button>
            </div>
        </div>     
    </div>
    
    <div class="gametips">
                    <a href="SquareOrder/SquareOrder.jsp#game-help" class="gametips-heading">游戏介绍与帮助</a>
                    <div id="game-help" class="gametips-details">
                        <h5>基本操作&游戏帮助</h5>
                        <p>游戏中会出现16张不等的卡片，请在最短时间内将卡片从最小数至最大数依次点出，所用时间越短，得分将越高。</p>
                        <hr>
                        <h5>游戏介绍</h5>
                        <p>方格排序锻炼你的注意力。注意力是拖延症的天敌。其实很多人觉得自己没法静下心来看书学习，或者认真工作，关键问题还是在于无法集中注意力。拖延症是可以通过注意力训练消灭的。</p>
                    </div>
     </div>
    
    
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="SquareOrder/js/SquareOrder.js"></script> 
    <script src="./js/pPromptTip.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>