var register = {


init : function (){
      // Display Event on HomePage
      $fh.act({
        "act": "eventList"
        
      }, function(resEvent) {
            // Cloud call was successful. Alert the response
            //alert('Cloud call Sucess for EventList with error:' + JSON.stringify(resEvent));
            register.eventList(resEvent);
         }, function(msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed for EventList with error:' + msg + '. Error properties:' + JSON.stringify(err));
        });
        
        // Display User List On HomePage
        $fh.act({
        "act": "userList"
      }, function(resUser) {
            // Cloud call was successful. Alert the response
           // alert('Cloud call Sucess for userList with error:' + JSON.stringify(resUser));
            register.userListing(resUser);
         }, function(msg, err) {
            // An error occured during the cloud call. Alert some debugging information
            alert('Cloud call failed for UserList with error:' + msg + '. Error properties:' + JSON.stringify(err));
        });
        return true;    
        
},

userListing: function (resUser) {
  
      var listObj = resUser.say;
      //alert('Got response from cloud for user IN Register:' + JSON.stringify(listObj));
      
     // var parsedJSON = eval('('+resUser.say+')');
      var parsedJSONUser = eval('('+resUser.say+')');
     
      //alert('Call User List'+parsedJSON);
      // Nowe we have to generate Attendee List of User
      //var parsedJSONUser = eval('('+resUser.say+')');
      //alert('Json Data'+parsedJSONUser);
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
      return true;
      
},

eventList: function(resEvent) {
  
      //alert("init register called");
      var listObj = resEvent.say;
      //alert('Got response from cloud IN Register:' + JSON.stringify(listObj));
      
      var parsedJSON = eval('('+resEvent.say+')');
     //alert('Evet Data'+parsedJSON); 
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
      
      return ;
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
      var lastName =  document.getElementById('last_name').value;
      
      var address = document.getElementById('address').value;
      var city =  document.getElementById('city').value;      
      var state = document.getElementById('state').value;
      var zipcode = document.getElementById('zipcode').value;      
      var country =  document.getElementById('country').value;
      var job_title = document.getElementById('job_title').value;      
      var company =  document.getElementById('company').value;
      
      
      var website =   document.getElementById('website').value;
      var blog =      document.getElementById('blog').value;
      alert(" -->"+firstName+":"+lastName+":"+address+":"+city+":"+state+":"+zipcode+":"+country+":"+job_title+":"+company+":"+website+":"+blog);
      
      //alert('call Submit Function'+firstName);
      var tempval = 0;
      if(firstName === '' || lastName === '' || address === '' || city === '' || state === '' || zipcode === '' || country === '' || job_title === '' || company === '' ||  website === '' || blog === '')
      {
        tempval = 2;
      }
      else   {
        tempval = 1;
      }

      if(tempval ===1 ) {
      $fh.act({
                "act": "insertUser",
                // my cloud function name to call
                "req": {
                  "first_name": firstName, // send this value to the cloud
                  "last_name" : lastName,
                  "address"   : address,
                  "city"      : city,
                  "state"     : state,
                  "zipcode"   : zipcode,
                  "country"   : country,
                  "job_title" : job_title,
                  "company"   : company,                                   
                  "website"   : website,
                  "blog"      : blog
                }
              }, function(resUser) {
                alert('Cloud call msg: '+ JSON.stringify(resUser));
                return true;                        
              },
              function(msg, err) {
                // An error occured during the cloud call. Alert some debugging information
                alert('Cloud call not Sucess with Error:' + msg + '. Error properties:' + JSON.stringify(err));
      });
      
      }
      else {
        //alert("please Insert Value");
        return false;
      }
      
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
};