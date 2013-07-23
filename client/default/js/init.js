
var datasetId = 'myShoppingList';
var datasetHash;
var sync;

$(document).ready(function() {

  
	importViews(function() {//import all views. callback when finished
		changeView("mainPage");
		// go to the first view: mainPage
	 var mainPageView = getView("mainPage");
  
	  sync = $fh.sync;
    register.init();
    //syncAdmin.init();
  
		bindEvents();
	});
});
