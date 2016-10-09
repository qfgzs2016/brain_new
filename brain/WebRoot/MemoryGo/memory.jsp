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

<div class="quiz-heading">
           <img alt="围棋" id="pic-memo" class="badge-image" src="img/memo.png">
           <h2>记忆围棋</h2>
           <p class="light">
           		<a>注意力</a>
           </p>
           <div class="memoscore">平均分: <span class="memo-score"></span></div>
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>新环境中的方向适应能力</p>
		<p>精确的地理位置记忆功能</p>
		<p>图像的回忆能力</p>
	</div>

<div id="fs_wrapper">
	<p id="message">你能记住吗？？？</p>
	<!--<img id="pic" src="../image/memoryGo.jpg" width="400" height="300" />-->
    <div id="info">
    	<div id="fs_header_wrapper" class="gameInfo_style">
       		<!--<span>date:</span><span id="date"></span>-->
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

<div class="gametips">
         <div class="gametips-heading"> 游戏介绍与帮助     </div>
         <div class="gametips-details">
               <h5>基本操作&游戏帮助</h5>
               <p>游戏开始后，棋盘上会出现数颗黑子，请记住它们，并找到它们的位置。</p>
               <hr>
               <h5>游戏介绍</h5>
               <p>记忆围棋训练你的空间记忆能力，这是一种和方向感、认路能力紧密挂钩的思维能力。因为游戏中需要用到一定的联想记忆法，才能记住一闪而过的多个视觉图形。这对回忆某个曾经去过的地方，或者想起前两天把U盘丢在了哪个角落等日常小烦恼都是很有帮助的。</p>
          </div>
</div>


</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="./js/currency.js"></script>
	<script src="MemoryGo/js/MemoryGo.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>