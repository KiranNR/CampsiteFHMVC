
var datasetId = 'myShoppingList';
var datasetHash;
var sync;

$(document).ready(function() {

  
	importViews(function() {//import all views. callback when finished
		changeView("mainPage");
		// go to the first view: mainPage
	 var mainPageView = getView("mainPage");
  
    
    $fh.act({
  "act": "sayHello",
  // my cloud function name to call
  "req": {
    "key": "Test" // send this value to the cloud
  }
}, function(res) {
  // Cloud call was successful. Alert the response
  alert('Got response from cloud:' + JSON.stringify(res));
}, function(msg, err) {
  // An error occured during the cloud call. Alert some debugging information
  alert('Cloud call failed with error:' + msg + '. Error properties:' + JSON.stringify(err));
});

	 sync = $fh.sync;

    register.init();
    //syncAdmin.init();
  
		bindEvents();
	});
});
