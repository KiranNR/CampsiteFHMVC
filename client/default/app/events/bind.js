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
		rt = register.submitData();
    if(rt == true) {
      alert('its true');
      register.init();
     } 
      		
		//userAuth.init();
		//register.init();
		
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

