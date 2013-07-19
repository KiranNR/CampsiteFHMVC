function bindEvents(){
	$("#loginBtn").bind("click",function(){
		//userAuth.login();
		register.display();
	});
	$("#submitUser").bind("click",function(){
		//userAuth.login();
		alert("submituserclick");
		//register.init();
		register.submitData();
	});
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

