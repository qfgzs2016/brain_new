<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
<Layout:overwrite name="Mycss">
	  <link type="text/css" href="FruitOrder/css/FruitOrder.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div>
    <span>轮数：</span><span id="times"></span>&nbsp;&nbsp;&nbsp;
     <span>耗时：</span><span id="second"></span>&nbsp;&nbsp;&nbsp;
     <span>得分：</span><span id="score"></span>
      
	<div id="fruit">
		<ul id ="fruitorder">   
            <li id="1"></li>
            <li id="2"></li>
            <li id="3"></li>
            <li id="4"></li>
            <li id="5"></li>
            <li id="6"></li>
            <li id="7"></li>
            <li id="8"></li>
            <li id="9"></li>
    	</ul>
	</div>

</div>
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="FruitOrder/js/FruitOrder.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>