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

<div  class="quiz-heading">
           <img alt="水果" class="badge-image" id="pic-fruit" src="FruitOrder/img/fruit.jpg">
           <h2>数学比武</h2>
           <p class="light">
           		<a>记忆力</a>
           </p>
           
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>新环境中的方向适应能力</p>
		<p>精确的地理位置记忆功能</p>
		<p>图像的回忆能力</p>
	</div>

<div id="fs_wrapper">
	<div id="fs_header_wrapper" class="gameInfo_style">
		<span class="head-left">
			<span>轮数：</span><span id="times"></span>
         	<span>耗时：</span><span id="second"></span>
         	<span>得分：</span><span id="score"></span>
		</span>
	   <span class="fruitscore">今日平均耗时: <span class="fruit-score">0</span></span>
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

<div class="gametips">
       <a href="FruitOrder/FruitOrder.jsp#game-help" class="gametips-heading">游戏介绍与帮助   </a>
       <div id="game-help" class="gametips-details">
          <h5>基本操作&游戏帮助</h5>
          <p>记住四种不同水果的位置，按照1至4的顺序依次找出他们的正确位置。</p>
          <hr>
          <h5>游戏介绍</h5>
          <p>水果礼盒训练你的空间记忆能力，这是一种和方向感、认路能力紧密挂钩的思维能力。因为游戏中需要用到一定的联想记忆法，才能记住一闪而过的多个视觉图形。这对回忆某个曾经去过的地方，或者想起前两天把U盘丢在了哪个角落等日常小烦恼都是很有帮助的。</p>
       </div>
</div>


</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="FruitOrder/js/FruitOrder.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>