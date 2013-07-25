var register = {

init: function(res,resU) {
      //alert("init register called");
      var listObj = res.say;
      //alert('Got response from cloud IN Register:' + JSON.stringify(listObj));
      
      var parsedJSON = eval('('+res.say+')');
      //alert('List object count is'+parsedJSON.list[0].fields.name);
      var eventName = parsedJSON.list[0].fields.name;
      var eventDate = parsedJSON.list[0].fields.event_date;
      var eventTime = parsedJSON.list[0].fields.event_time;
      var eventLocation =  parsedJSON.list[0].fields.location;
      
      
      //document.getElementById('event_data_name').innerHtml(name);
      document.getElementById('event_data_name').innerHTML= eventName;
      document.getElementById('event_data_eventDate').innerHTML= eventDate;
      document.getElementById('event_data_eventTime').innerHTML= eventTime;
      document.getElementById('event_data_eventLocation').innerHTML= eventLocation;
      
      // Nowe we have to generate Attendee List of User
      var parsedJSONUser = eval('('+resU.say+')');
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
     /* sync.init({
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
        "last_name": "Steve"
      };
      
      /*sync.doCreate(datasetId, dataItem, function(res) {
        console.log('Create item success');
      }, function(code, msg) {
        alert('An error occured while creating data : (' + code + ') ' + msg);
      });
      
        sync.doRead(datasetId, uid, function(res) {
        var data = res.data;
        // Update the name field with the updated value from the text box
        alert(data);
        data.name = name;
        data.recordDelay = self.recordDelayVal;

      }, function(code, msg) {
        alert('Unable to read row for updating : (' + code + ') ' + msg);
      });*/
    
      //changeView('mainPage');
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
      
 
    handleListSuccess: function(res) {
      var tableData = [];
      // Iterate over the dataset to create a record structure which is suitable for the jQuery Data table
      // we are using to display the data (i.e a 2d array)
    
      var controls = [];
      controls.push('<button class="btn edit btn-small"><i class="icon-pencil"></i> Edit</button>&nbsp;');
      controls.push('<button class="btn delete btn-small"><i class="icon-trash"></i> Delete</button>&nbsp;');

      for( i in res ) {
        var row = [];
        var rec = res[i];
        row.push(i);
        row.push(rec.data.name);
        row.push(moment(rec.data.created).format('YYYY-MM-DD HH:mm:ss'));
        row.push(controls.join(""));
        tableData.push(row);
      }

      //self.reloadTable(tableData);
    },

    handleListFailure: function(code, msg) {
      alert('An error occured while listing data : (' + code + ') ' + msg);
    },
     
  
	display : function() {

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
		
		
	},
	
	submitData : function() {  
            
      var firstName = document.getElementById('first_name').value;
      var lastName = document.getElementById('last_name').value;
      var website = document.getElementById('website').value;
      var blog = document.getElementById('blog').value;
      
      $fh.act({
                "act": "insertUser",
                // my cloud function name to call
                "req": {
                  "first_name": firstName, // send this value to the cloud
                  "last_name" : lastName,
                  "website" : website,
                  "blog":blog
                }
              }, function(resUser) {
                alert('Response From Cloud Code for Insrted user'+ JSON.stringify(resUser));                
              },
              function(msg, err) {
                // An error occured during the cloud call. Alert some debugging information
                alert('Cloud call failed with error:' + msg + '. Error properties:' + JSON.stringify(err));
      });
      
      return true;
      
    /*  $fh.db({
  "act": "create",
  "type": "myFirstEntity",
  "fields": {
    "firstName": "Joe",
    "lastName": "Bloggs",
    "address1": "22 Blogger Lane",
    "address2": "Bloggsville",
    "country": "Bloggland",
    "phone": "555-123456"
  }
}, function(err, data) {
  if (err) {
    console.log("Error " + err)
  } else {
    console.log(JSON.stringify(data))
    }
     
  }
  ) */
},
    
/*      sync.doCreate(datasetId, dataItem, function(res) {
        alert("Data is submitted Agaun");
     
      }, function(code, msg) {
        alert('An error occured while creating data : (' + code + ') ' + msg);
      });
  }, */
 
  
	logout : function() {
	 alert('called');
		changeView("mainPage");
	}
}