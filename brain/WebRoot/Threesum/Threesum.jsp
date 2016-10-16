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
	<link type="text/css" href="Threesum/css/Threesum.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">

<div class="quiz-heading">
           <img id="pic-three" alt="数学" class="badge-image" src="Threesum/img/Threesum.jpg">
           <h2>三连加</h2>
           <p class="light">
           		<a>计算能力</a>
           </p>
           
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>灵活的计算能力</p>
		<p>精确地数值判断能力</p>
		<p>心算能力</p>
	</div>

<div id="game" class="middle">
    	<div id="content_top">
        	<span class="head-left">
        		<span>轮数：</span><span id="times"></span>
        		<span>耗时：</span><span id="second"></span>
            	<span>得分：</span><span id="score"></span>
            </span>
            <span class="Threesumscore">今日平均分: <span class="Threesum-score">0</span></span>
        </div>
    
        <div id="game-sum">
        	<div id="content_left"><span id="sum" class="content_text"></span></div> 
        	<div id="content_right"><input id="sum-res" type="text" name="sum-res" value="" placeholder="请输入答案" /></div>
        </div>	
        
        <div id="content_footer">
            <button id="same">确定</button>
   		 </div>
      <div id="fs_footer_wrapper">
    	<button id="start" class="start_button">开始游戏</button>
        <button id="again" class="again_button">重来</button>    	
     </div>
        
    </div> 

<div class="gametips">
       <a href="/brain/Threesum/Threesum.jsp#game-help" class="gametips-heading"> 游戏介绍与帮助</a>
       <div id="game-help" class="gametips-details">
            <h5>基本操作&游戏帮助</h5>
            <p>游戏开始后会出现三个个位数相加，请计算它们的结果，并迅速回答。</p>
            <hr>
            <h5>游戏介绍</h5>
            <p>三连加可以训练你的数量关系推理能力。</p>
        </div>
</div>

</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="Threesum/js/Threesum.js"></script>
    <script src="Threesum/js/pPromptWd.js"></script>  
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>