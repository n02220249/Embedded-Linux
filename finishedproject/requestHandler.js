var exec = require("child_process").exec;
var MongoClient = require('mongodb').MongoClient, format = require('util').format;

function printDB(response2)
{
var fs = require('fs');
fs.readFile('intro.html', 'utf8', function (err, data) {
if (err) {
return console.log(err);
}
response2.write(data);
});


MongoClient.connect('mongodb://192.168.1.140:27017/test', function(err, db, response) {
    if (err) throw err;
    console.log("Connected to Database");


//response2.end();

          var collection = db.collection('contacts');

//                response2.write("<table>");
        collection.find().each(function(err, doc, response) {
          if(doc != null){
                 console.log("Doc from Each ");
            console.log(doc.hour);
//              output = output + doc.hour.toString();
                temp = "me";
                response2.write("<tr>");
                response2.write("<td>");

                response2.write(String(doc.hour));
                response2.write("</td>");

                response2.write("<td>");

                response2.write(String(doc.temp));
                response2.write("</td>");

                response2.write("</tr>");

		response2.write("\n");


}

});


});

setTimeout((function() {
                response2.write("</table>");
                response2.write("</div>");
                response2.write("</body>");
                response2.write("</html>");


//fs.readFile('intro.html', 'utf8', function (err, data) {
//if (err) {
//return console.log(err);
//}
//response2.write(data);
  response2.end();

//});



}), 1000);











}
exports.printDB = printDB;
