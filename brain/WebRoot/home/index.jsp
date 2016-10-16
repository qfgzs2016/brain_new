<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
首页
</Layout:overwrite>
 <Layout:overwrite name="Mycss">
 	    <link rel="stylesheet" href="css/font-awesome.min.css">
    	<link href="css/application.css" media="all" type="text/css" rel="stylesheet">
</Layout:overwrite> 

<Layout:overwrite name="MyContent">
<div>
	<div class="span9 spanoffset">
    <div id="courses-container">
        <div class="topic-group topic-group-1">
            <div class="primary-heading">
                <h1 style="padding-right:770px;">所有游戏</h1>
            </div>
            
                        <ul class="achievement-grid">
                                <li class="primary half">
                    <a href="SquareOrder/SquareOrder.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                               <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">方格排序</p>
                            <h4>注意力</h4>
                            <img alt="点击" src="SquareOrder/img/check.png">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="MemoryGo/memory.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                                <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">记忆围棋</p>
                            <h4>空间记忆能力</h4>
                            <img alt="记忆围棋" src="MemoryGo/img/memo.png">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="Mahjong/Mahjong.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                             <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">麻将速配</p>
                            <h4>信息处理能力</h4>
                            <img alt="麻将速配" src="Mahjong/img/Mahjong.png">
                        </div>
                    </a>
                </li>
                            </ul>
                            
                        <ul class="achievement-grid">
                                <li class="primary half">
                    <a href="MathMatch/MathMatch.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                              <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">数学比武</p>
                            <h4>数量关系推理能力</h4>
                            <img alt="数学" src="MathMatch/img/math.jpg">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="FruitOrder/FruitOrder.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                              <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">水果礼盒</p>
                            <h4>空间记忆能力</h4>
                            <img alt="水果" src="FruitOrder/img/fruit.jpg">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="colorMatch/colorMatch.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                              <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span> 
                            <p class="category">颜色匹配</p>
                            <h4>反应抑制能力</h4>
                            <img alt="颜色匹配" src="colorMatch/img/ColorMatch.png">
                        </div>
                    </a>
                </li>
                            </ul>
                            
                           <ul class="achievement-grid">
                                <li class="primary half">
                    <a href="PukeMatch/PukeMatch.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                    			 <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">扑克匹配</p>
                            <h4>信息处理能力</h4>
                            <img alt="扑克" src="PukeMatch/img/PukeMatch.png">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="Threesum/Threesum.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                    		<span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">三连加</p>
                            <h4>算数能力</h4>
                            <img alt="算数" src="Threesum/img/Threesum.jpg">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="moonLanding/moonLanding.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
            				<span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">月球登陆</p>
                            <h4>算数能力</h4>
                            <img alt="月球登陆" src="moonLanding/img/Moonlogin.jpg">
                        </div>
                    </a>
                </li>
<<<<<<< HEAD
                <li id="lastgame" class="primary half">
                    <a href="" class="achievement-link">
=======
                <li class="primary half">
                    <a href="fish/fish.jsp" class="achievement-link">
>>>>>>> 84ff3e1ad1680e6ae823361c99ad3be90f886fcb
                        <div class="achievement-hero feature">
            				<span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">鱼翔泉底</p>
                            <h4>判断力</h4>
                            <img alt="鱼翔泉底" src="fish/img/fish.jpg">
                        </div>
                    </a>
                </li>
               
                            </ul>                     
                      
             <div class="sub-heading"></div>
            <p class="copyright">© 2016 秦风工作室  版权所有.</p>
       
    </div>
</div>
</div>
</div>

</Layout:overwrite>
<Layout:overwrite name="MyScript">
	 <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	 <script type="text/javascript" src="util/Check.js"></script>
	 <script type="text/javascript" src="js/registerJs.js"></script>
	 <script type="text/javascript" src="js/LoginJs.js"></script>
     <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
     <script src="Scripts/bootstrap/noty/jquery.noty.js" type="text/javascript"></script>
    <script src="Scripts/bootstrap/noty/packaged/jquery.noty.packaged.min.js" type="text/javascript"></script>
     
</Layout:overwrite>
<%@ include file="/share/_Layout.jsp"%>