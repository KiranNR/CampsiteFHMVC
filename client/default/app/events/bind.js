function bindEvents(){
	$("#registerBtn").bind("click",function(){
		//userAuth.login();
		register.display();
	});
	$("#submitUser").bind("click",function(){
		//userAuth.login();
		//alert("submituserclick");
		//register.init();
		register.submitData();
		userAuth.init();
		
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

