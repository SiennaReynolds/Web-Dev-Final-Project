//use this to create a collection for each CSX file that gets added. Make the name something userDefined, like Spring2020 students.
var MongoDB = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var name = "uhhhh"//make this a prop
MongoDB.connect(url, function (err, db) {
    if (err) throw err;
    var dba = db.db("makethisaprop");
    dba.createCollection(name, function (err, res) {
        if (err) throw err;
        console.log("collection added to mongodb");
        db.close;
    });

    var myobj = { name: "Company Inc", address: "Highway 37" }; //make this a file that is pulled in.
    dba.collection(name).insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});