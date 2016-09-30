<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
<Layout:overwrite name="Mycss">
	  <link type="text/css" href="SquareOrder/css/SquareOrder.css" rel="stylesheet" /> 
</Layout:overwrite>

<Layout:overwrite name="MyContent">
<div>
	<span>时间：</span><span id="second"></span>
<div id="squareorder">
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
</div>
</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	 <script src="./js/currency.js"></script>
    <script src="SquareOrder/js/SquareOrder.js"></script> 
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>