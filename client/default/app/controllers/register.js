var register = {

init: function() {
      //alert("init register called");
    
      // Ensure UI is set up correctly
      /*$('#updateBtn').attr('disabled', 'disabled');

      $('#isOnlineChk').unbind().click(self.setOnline);
      $('#updateBtn').unbind().click(self.updateItem);
      $('#addBtn').unbind().click(self.addItem);
      $('#syncDelayBtn').unbind().click(self.setSyncDelay);
      $('#recordDelayBtn').unbind().click(self.setRecordDelay);
      $('#clearNotificationsBtn').unbind().click(self.clearNotifications);
      */
      // Initialise the Sync Service. See http://docs.feedhenry.com/v2/api_js_client_api.html#$fh.sync for details on initialisation options
      sync.init({
        //"sync_frequency": 5,
        "do_console_log" : true
      });

      // Provide handler function for receiving notifications from sync service - e.g. data changed
      sync.notify(self.handleSyncNotifications);

      // Get the Sync service to manage the dataset called "myShoppingList"
      sync.manage(datasetId, {});
      //alert("sync sudhi");
      
       var dataItem = {
        "first_name" : "Kronicsteveen",
        "uid": "123"
      };
      return ;
      //alert("End"); 
    },

  handleSyncNotifications: function(notification) {
      if ('sync_complete' == notification.code) {
      alert('calledsyncnotiin IF');
    // We are interested in sync_complete notifications as there may be changes to the dataset
    if (localDatasetHash != notification.uid) {
      // The dataset hash received in the uid parameter is different to the one 
      // we have stored. This means that there has been a change in the dataset 
      // so we should invoke the list operation.
      datasetHash = notification.uid;
      sync.doList(datasetId, self.handleListSuccess, self.handleListFailure);
    }
  }
      },
  
	display : function() {
	//alert("called");
		//var username, pwd, usernameElement, passwordElement;
		//define variables
		//usernameElement = document.getElementById("username");
		//passwordElement = document.getElementById("password");
		//username = usernameElement.value;
		//pwd = passwordElement.value;
		var $ = document; // shortcut
    var cssId = 'layout_marketingcamp';  // you could encode the css path itself to generate id..
    if (!$.getElementById(cssId))
    {
        //var head  = $.getElementsByTagName('div')[0];
        var div = $.getElementById("divcss");
        var link  = $.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/layout_marketingcamp.css';
        link.media = 'all';
        div.appendChild(link);
    }

		document.getElementById("mainPage").style.display="none";
		document.getElementById("register").style.display="block";
		
		changeView("register");
		/*users.userValidate(username, pwd, function(res) {
			//if(res === true) {
				document.getElementById("name").innerHTML = username;
				return changeView("logged");
			} else {
				alert("Invalid username or password");
			}
		});*/
		
	},
	
	submitData : function() {  
      alert("Data is submitted");
      var created = new Date().getTime();
      
      var dataItem = {
        "first_name" : "Kronicsteve",
        "created" : created,
      };
     
      sync.doCreate(datasetId, dataItem, function(res) {
        alert("Data is submitted Agaun");
     
      }, function(code, msg) {
        alert('An error occured while creating data : (' + code + ') ' + msg);
      });
  },
 
  
	logout : function() {
		changeView("mainPage");
	}
}