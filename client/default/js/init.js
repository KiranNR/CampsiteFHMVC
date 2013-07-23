
var datasetId = 'myShoppingList';
var datasetHash;
var sync;

$(document).ready(function() {

  
	importViews(function() {//import all views. callback when finished
		changeView("mainPage");
		// go to the first view: mainPage
	 var mainPageView = getView("mainPage");
  
	 sync = $fh.sync;
$fh.act({
  act: 'sayHello'
}, function(res) {
  alert("Cloud says : " + JSON.stringify(res.say));
}, function(msg, err) {
  alert('Cloud call failed with error:' + msg + '. Error properties:' + JSON.stringify(err));
});
    register.init();
    //syncAdmin.init();
  
		bindEvents();
	});
});
