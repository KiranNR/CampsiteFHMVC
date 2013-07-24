
$(document).ready(function() {
  
	importViews(function() {//import all views. callback when finished
		 changeView("mainPage");
		 // go to the first view: mainPage
	   var mainPageView = getView("mainPage");
     var userData ; 
      // User List
      $fh.act({
                "act": "userList",
                
              }, function(resUser) {
                //alert('Response From Cloud Code for user'+ JSON.stringify(resUser));
                userData = resUser;
              },
              function(msg, err) {
                // An error occured during the cloud call. Alert some debugging information
                alert('Cloud call failed with error:' + msg + '. Error properties:' + JSON.stringify(err));
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
            alert('Cloud call failed with error:' + msg + '. Error properties:' + JSON.stringify(err));
        });
 
		bindEvents();
	});
});
