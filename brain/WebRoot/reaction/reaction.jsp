<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
<Layout:overwrite name="Mycss">
	<link type="text/css" href="reaction/css/reaction.css" rel="stylesheet" />
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div class="quiz-heading">
	<img id="pic-click" alt="数学" class="badge-image" src="onclick/img/onclick.jpg">
	<h2>点击白点</h2>
	<p class="light">
		<a>反应能力</a>
	</p>
	<div class="avrgeScoreCla">
		今日平均分:<span id="avrScoreID" ></span>
	</div>
</div>

<canvas id="reaction_canvas" width="650" height="500">你的浏览器不支持canvas元素，请更新或更换你的浏览器。</canvas>

<div class="gametips">
          <a href="fish/fish.jsp#game-help" class="gametips-heading"> 游戏介绍与帮助   </a>
          <div id="game-help" class="gametips-details">
              <h5>基本操作&游戏帮助</h5>
              <p>一群鱼会出现在海底，快速找出最中间的鱼，并迅速在上下左右按钮上点击选中它的方向。你的反应越快最终得分越高</p>
              <hr>
              <h5>游戏介绍</h5>
              <p>鱼翔泉底，需要你做出正确的判断。它训练的是你的方向辨别能力。</p>
          </div>
</div>

</Layout:overwrite>
<Layout:overwrite name="MyScript">
	<script src="js/currency.js"></script>
	<script src="reaction/js/reaction.js"></script>
</Layout:overwrite>
<%@ include file="/share/_Layout.jsp"%>