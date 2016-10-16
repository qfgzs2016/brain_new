
		
				 $("#login").click(function(){
					 	var username=$("#username").val().trim();
					 	var password=$("#passwords").val().trim();
					   $.ajax({
				           url: "servlet/UserLoginServlet",
				           type: "POST",
				           data: { username: username, password: password},
				           dataType: "json",
				           success: function (result) {            	
				               if (result.code == 1) {
				            	   noty({ text: "登录成功", type: 'success', layout: 'topCenter', timeout: 2000 });  
				               		location.href="home/index.jsp";
				               }
				               else{
				            	//   alert("登录失败");
				            	   noty({ text: "登录失败", type: 'warning', layout: 'topCenter', timeout: 2000 });  
				               }
				           }
				         
					   })
				 })
       	
	
       		document.onkeydown=keyListener; 
       		function keyListener(e){ 
       			if(e.keyCode == 13){  
       				$("#login").click();
       				
       			}
       		}


		


	
	
	
	
	
			
			
			
