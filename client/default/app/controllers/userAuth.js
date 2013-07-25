var userAuth = {
	login : function() {
		if(users == undefined) {
			return;
		}
		var username, pwd, usernameElement, passwordElement;
		//define variables
		usernameElement = document.getElementById("username");
		passwordElement = document.getElementById("password");
		username = usernameElement.value;
		pwd = passwordElement.value;
		users.userValidate(username, pwd, function(res) {
			if(res === true) {
				document.getElementById("name").innerHTML = username;
				return changeView("logged");
			} else {
				alert("Invalid username or password");
			}
		});
	},
	
	init : function () {
	
	document.getElementById("mainPage").style.display="block";
	document.getElementById("register").style.display="none";
	$('link[rel=stylesheet][href~="css/layout_marketingcamp.css"]').remove();
	// we havet to remove the css file	
    var userData ; 
      // User List
      $fh.act({
                "act": "userList",                
              }, function(resUser) {
                alert('Response From Cloud Code for user');
                userData = resUser;
              },
              function(msg, err) {
                // An error occured during the cloud call. Alert some debugging information
                alert('Cloud call failed for userList with error:' + msg + '. Error properties:' + JSON.stringify(err));
      });

      // Display Event on HomePage
      $fh.act({
        "act": "eventList",
        // my cloud function name to call
        "req": {
          "key": "someValue" // send this value to the cloud
        }
      }, function(resEvent) {
            // Cloud call was successful. Alert the response
            register.init(resEvent,userData);
         }, function(msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed for eventList with error:' + msg + '. Error properties:' + JSON.stringify(err));
        });
        
  },
	logout : function() {
	  alert('Logut clll'); 
		return changeView("mainPage");
	}
}