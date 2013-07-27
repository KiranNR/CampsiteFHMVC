var userAuth = {
		
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
                alert('Response From Cloud Code for user'+ JSON.stringify(resUser));
                userData = resUser;
              },
              function(msg, err) {
                // An error occured during the cloud call. Alert some debugging information
                alert('Cloud call failed for userList with error:' + msg + '. Error properties:' + JSON.stringify(err));
      });

      // Display Event on HomePage
      $fh.act({
        "act": "eventList",
        
      }, function(resEvent) {
            // Cloud call was successful. Alert the response
            alert('Cloud call Sucess for EventList with error:' + JSON.stringify(resEvent));
              
              register.init(resEvent,userData);
         }, function(msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed for EventList with error:' + msg + '. Error properties:' + JSON.stringify(err));
        });
        
  }
}