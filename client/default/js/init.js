
$(document).ready(function() {
  
	importViews(function() {//import all views. callback when finished
		 changeView("mainPage");
		 // go to the first view: mainPage
	   var mainPageView = getView("mainPage");
     
     userAuth.init(); 
		 bindEvents();
	});
});
