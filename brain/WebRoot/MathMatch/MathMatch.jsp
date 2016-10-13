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
	<link type="text/css" href="MathMatch/css/headGame.css" rel="stylesheet" />
	<link type="text/css" href="MathMatch/css/MathMatch.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">

<div class="quiz-heading">
           <img id="pic-math" alt="数学" class="badge-image" src="MathMatch/img/math.jpg">
           <h2>数学比武</h2>
           <p class="light">
           		<a>认知速度</a>
           </p>
           <div class="mathscore">今日平均分: <span class="math-score"></span></div>
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>灵活的价格比较能力</p>
		<p>精确地数值判断能力</p>
		<p>心算能力</p>
	</div>

<div id="fs_wrapper">
	<div id="fs_header_wrapper" class="gameInfo_style">
        <span>轮数：</span><span id="times"></span>&nbsp;
        <span>耗时：</span><span id="second"></span>&nbsp;
        <span>得分：</span><span id="score"></span>
    </div>
	<div id="content_bg" class="middle">
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

<div class="gametips">
       <div class="gametips-heading"> 游戏介绍与帮助</div>
       <div class="gametips-details">
            <h5>基本操作&游戏帮助</h5>
            <p>游戏开始后会出现两组公式，请比较它们的结果，并迅速回答。</p>
            <hr>
            <h5>游戏介绍</h5>
            <p>数学比武可以训练你的数量关系推理能力。这属于问题解决能力范畴。玩熟了这款游戏，你就不用站在商场的货架前苦心纠结于哪个牌子的巧克力最划算了。到底买哪一种更合算？对比可可脂含量和卡路里以后结果又怎样？究竟哪一个更适合正在减肥或者增肥的你？不要凌乱，坚持训练爱海豚，保证你只买好的，不买亏的。</p>
        </div>
</div>

</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="MathMatch/js/MathMatch.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>