function bindEvents(){
	$("#registerBtn").bind("click",function(){
		//userAuth.login();
		register.display();
	});
	$("#submitUser").bind("click",function(){
		register.submitData();
		userAuth.init();
		
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

