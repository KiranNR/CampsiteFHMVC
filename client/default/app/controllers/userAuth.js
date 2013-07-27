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
                alert('Response From Cloud Code for userss'+ JSON.stringify(resUser));
                
                // Nowe we have to generate Attendee List of User
                var parsedJSONUser = eval('('+resUser.say+')');
               // alert(JSON.stringify(parsedJSONUser));
                // User Data
                var firstName = '';
                var lastName = '';
                var website = '';
                var blog = '';
                
                var html = '';
                var userCount = parsedJSONUser.count;
                
                if(userCount > 0) {
                  // Now fetch The Data 
                  for(i=0;i<userCount;i++) {
                      firstName = parsedJSONUser.list[i].fields.first_name;
                      lastName = parsedJSONUser.list[i].fields.last_name;
                      website = parsedJSONUser.list[i].fields.website;
                      blog =  parsedJSONUser.list[i].fields.blog;
                    
                      html += '<div> <a href="#" target="_blank"> <h3>'+firstName +'&nbsp;'+lastName + '</h3></a>';
                      html += '<p> Website:<a href="'+website+'"> '+website+'</a>';
                      html += '</p> <p> Blog: <a href="'+blog+'"> '+blog+'</a></p></div>';
                       
                  }
                  document.getElementById('homepageUserListing').innerHTML = html;
                }
                
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
            register.init(resEvent);
         }, function(msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed for EventList with error:' + msg + '. Error properties:' + JSON.stringify(err));
        });
        
  }
}