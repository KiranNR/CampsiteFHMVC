function bindEvents(){
	$("#registerBtn").bind("click",function(){
		//userAuth.login();
		register.display();
	});
	$("#submitUser").bind("click",function(){
		//userAuth.login();
		//alert("submituserclick");
		//register.init();
		var rt;
		//alert("Before Submit Data called");
		rt = register.submitData();
		 
      		
		//userAuth.init();
		//register.init();
		
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

