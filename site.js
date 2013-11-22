var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
var http = require("http");



var Func4 = function(req, res)
{
MongoClient.connect('mongodb://192.168.1.140:27017/test', function(err, db) {
	if (err) throw err;
    console.log("Connected to Database");
  var collectionName = "contacts";
  mongodbClient.collection(collectionName, function(err, coll) {
    coll.ensureIndex("hour", function(err, indexname) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("index name = " + indexname);
      res.end();
    })});
};

  http.createServer(function(request, response) {

Func4(request, response);

});