
		
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
				            	   noty({ text: "登录成功", type: 'success', layout: 'topCenter', timeout: 3000 });  
				               		location.href="/brain/home/index.jsp";
				               }
				               else{
				            	//   alert("登录失败");
				            	   noty({ text: "用户名或密码错误", type: 'warning', layout: 'topCenter', timeout: 3000 });  
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


		


	
	
	
	
	
			
			
			
