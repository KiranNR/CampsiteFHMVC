var  mysql = require('mysql'); 

var connection = mysql.createConnection({
host : 'cloudcamp.cfp6lld7igql.us-east-1.rds.amazonaws.com',
user : 'dave',
password : 'deepblue',
database : 'campsite_fh'
});

connection.connect();

/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
 */


exports.eventList = function(params,callback) {
connection.query("select * from event",
    function(err, results, fields) {
      //eventData = results;
      return callback(null, {
                  say: JSON.stringify(results)
              });
    }
  );
}

exports.userList = function(params,callback) {
connection.query("select * from user",
    function(err, results, fields) {
      //eventData = results;
      return callback(null, {
                  say: JSON.stringify(results)
              });
    }
  );
}
exports.eventList1 = function(params, callback) {

$fh.db({
  "act": "list",
  "type": "event"
}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
  
   // if list is Empty Create New record
   console.log('eventList Data'+data.count);
   if(data.count === 0){
        $fh.db({
            "act": "create",
            "type": "event",
            "fields": {
              "name": "MarketingCamp Chicago",
              "description": "This Is Test Description",
              "event_date": "12-03-2013",
              "event_time": "12:00",
              "location": "200 S. Wacker Drive, 15th Floor, Chicago, IL, USA"
            }
          }, function(err, data) {
            if (err) {
              console.log("Error " + err);
            } else {
               return callback(null, {
                  say: "Data is Inserted Sucessfully"+JSON.stringify(data)
              });
            }
            });  
        
   }
   // if there is record we have to display it
   else {
  
      return callback(null, {
                  say: JSON.stringify(data)
              });
   }
   
  }
});


};


exports.userList1 = function(params, callback) {

$fh.db({
  "act": "list",
  "type": "user"

}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {  
    // if list is Empty Create New record
    console.log('userlist data count'+data.count);
    return callback(null, {
                  say: JSON.stringify(data)
              });      
  }
});


};

exports.insertUser = function(params, callback) {

var first_name = params.first_name;
var last_name = params.last_name;
var address = params.address;
var city = params.city;
var state = params.state;
var zipcode = params.zipcode;
var country = params.country;
var job_title = params.job_title;
var company = params.company;
var website = params.website;
var blog = params.blog;

connection.query("INSERT INTO user( first_name, last_name,address,city,state,zipcode,country,job_title ,company ,website ,blog)VALUES ('"+first_name+"','"+last_name+"','"+address+"','"+city+"','"+state+"','"+zipcode+"','"+country+"','"+job_title+"','"+company+"','"+website+"','"+blog+"')",
      function(err, results, fields) {
        if (err) throw err;
        
        return callback(null, {
          say: JSON.stringify(results)
        });
             
       } 
      );

};
exports.insertUser1 = function(params, callback) {

$fh.db({
  "act": "create",
  "type": "user",
  "fields" : {
    "first_name" : params.first_name,
    "last_name"  : params.last_name,
    "website"    : params.website,
    "blog"        : params.blog
  }
  
}, function(err, data) {
  if (err) {
    console.log("Insert Log Error " + err);
  } else {  
    // if list is Empty Create New record
    console.log('User List Insert data:'+data.count);
    return callback(null, {
          say: JSON.stringify(data)
    });      
  }
});


};

