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
	<link type="text/css" href="Mahjong/css/MahjongMatch.css" rel="stylesheet" />
</Layout:overwrite>

<Layout:overwrite name="MyContent">

<div class="quiz-heading">
           <img alt="麻将" class="badge-image" id="pic-mahjong" src="Mahjong/img/Mahjong.png">
           <h2>麻将速配</h2>
           <p class="light">
           		<a>认知速度</a>
           </p>
</div>
	<div class="gameinfo">
		<p>游戏可以为你带来:</p>
		<p>更敏捷的思维</p>
		<p>更短的反应时间</p>
		<p>加速认知处理过程</p>
	</div>

<div id="fs_wrapper">
        <div id="fs_header_wrapper" class="gameInfo_style">
            <span>剩余时间：</span><span id="second"></span>&nbsp;
            <span>得分：</span><span id="score"></span>&nbsp;
        </div>
        <canvas id="mahjongMatch_canvas" width="600" height="400"></canvas>
        <div id="fs_footer_wrapper">
        	<button id="start" class="start_button">开始游戏</button>
            <button id="same" class="same_button">相同</button>
            <button id="different" class="different_button">不相同</button>
            <button id="again" class="again_button">再来一次</button>
        </div>
        <div id="cover"></div>
 </div>

<div class="gametips">
          <div class="gametips-heading"> 游戏介绍与帮助   </div>
          <div class="gametips-details">
              <h5>基本操作&游戏帮助</h5>
              <p>麻将牌上会出现一组符号，其中一个为蓝色，请记住它的位置，并在下一组符号出现时判断是否与其相同。</p>
              <hr>
              <h5>游戏介绍</h5>
              <p>麻将匹配，需要你在极短的时间内做出正确的判断。它训练的是你的反应速度。你的反应越快，接受新事物、适应新环境的能力就越强。因此，这是一切智力提升的前提。练好快速匹配，才能拥有高效的学习和思维能力。</p>
          </div>
</div>


</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="./js/currency.js"></script>
    <script src="Mahjong/js/MahjongMatch.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>