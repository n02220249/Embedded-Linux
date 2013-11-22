var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
var http = require("http");
var output = "q";
var temp = "";
  http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});


MongoClient.connect('mongodb://192.168.1.140:27017/test', function(err, db) {
    if (err) throw err;
    console.log("Connected to Database");

          var collection = db.collection('contacts');

        collection.find().each(function(err, doc) {
          if(doc != null){
                 console.log("Doc from Each ");
            console.log(doc.hour);
//		output = output + doc.hour.toString();
		temp = "me";
		response.write("mmmm");
		
}
});
        collection.find().explain(function(err, doc) {
          if(doc != null){
		 console.log("Doc from Each ");
            console.dir(doc);
		output = doc;
}
		db.close();
});



});
 

  response.write(temp);

  response.end();
}).listen(8888);
