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
		//alert('Called herer34');
		//register.logout();
		register.logout();
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

