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
		alert("Before Submit Data called");
		rt = register.submitData();
		alert('aftersubmitdata cllaed RT VALUE IS'+rt);
    if(rt == 3) {
      alert('IF Value is True Call register.init');
      register.init();
     } 
      		
		//userAuth.init();
		//register.init();
		
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

