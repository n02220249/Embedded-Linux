var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.1.120/test', function(err, db) {
  if(err) throw err;
  console.log("Connected to Database");
});