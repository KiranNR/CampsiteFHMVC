//var dataHandler = require('./dataHandler.js');
//var sync = $fh.sync;

/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
 */


/* dataset_id = The namespace for the dataset. This allows multiple different datasets to be managed
 by a single applications.
 */
//var dataset_id = "myShoppingList";

/* To allow the sync client to interact with the cloud dataset, a function is required in main.js who's
 * name is the same as the dataset_id - in this case "myShoppingList". The implmentation for this function
 * is alwyas a call to sync.invoke() - passing the dataset_id, the request parameters and the callback.
 *
 */
 
/*exports.myShoppingList = function(params, callback) {
  return sync.invoke(dataset_id, params, callback);
};*/

/* Public function to support stoping syncronisation of an individual dataset */
/*exports.stopSync = function(params, callback) {
  return sync.stop(dataset_id, callback);
};*/

/* Public function to support stoping syncronisation of all datasets (Since there is only 1 dataset active in this
 * example, the stopAllSync() function is somewhat redundent */
/*exports.stopAllSync = function(params, callback) {
  return sync.stopAll(callback);
};*/

exports.eventList = function(params, callback) {

$fh.db({
  "act": "list",
  "type": "event"
}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
  
   // if list is Empty Create New record
   console.log('data couunt'+data.count);
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
   // console.log(JSON.stringify(data))
    
    /*
     The output will be something similar to this
     {
      "fields": {
        "address1": "22 Blogger Lane",
        "address2": "Bloggsville",
        "country": "Bloggland",
        "fistName": "Joe",
        "lastName": "Bloggs",
        "phone": "555-123456"
      },
      "guid": "4e563ea44fe8e7fc19000002",
      "type": "myFirstEntity"
    }
    */
  }
});


/*  return callback(null, {
    say: "Hello from the Cloud2"+params.key
  });*/
};


exports.userList = function(params, callback) {

$fh.db({
  "act": "list",
  "type": "user"

}, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {  
    // if list is Empty Create New record
    console.log('data couunt'+data.count);
    return callback(null, {
                  say: JSON.stringify(data)
              });      
  }
});


};

exports.insertUser = function(params, callback) {

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
    console.log("Error " + err);
  } else {  
    // if list is Empty Create New record
    console.log('data couunt'+data.count);
    return callback(null, {
          say: JSON.stringify(data)
    });      
  }
});


};


/*
 * The Data Sync Framework manages syncing data between the App Cloud and the App Client (i.e. mobile device).
 * The app developer must provide the functions for handling data synchronisation between the back end data store
 * and the App Cloud. In this sample app, the "back end data store" is a simple Cloud Database which is implemented
 * using the $fh.db() API. See dataHandler.js for the implementation of the various functions defined below.
 */
/*sync.init(dataset_id, {}, function() {
  sync.handleList(dataset_id, dataHandler.doList);
  sync.handleCreate(dataset_id, dataHandler.doCreate);
  sync.handleRead(dataset_id, dataHandler.doRead);
  sync.handleUpdate(dataset_id, dataHandler.doUpdate);
  sync.handleDelete(dataset_id, dataHandler.doDelete);
  sync.handleCollision(dataset_id, dataHandler.doCollision);
  sync.listCollisions(dataset_id, dataHandler.listCollisions);
  sync.removeCollision(dataset_id, dataHandler.removeCollision);
});*/

