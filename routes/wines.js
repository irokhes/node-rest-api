var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;
	
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('winedb', server);

db.open(function(err, db){
	if(!err){
		console.log("Connected to the 'winedb' database");
		db.collection('wines', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
	}
});

exports.findAll = function(req, res){
	res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.findById = function(req, res){
	res.send({id:req.params.id, name: 'Rioja Bordon', description: 'Great Rioja wine'});
};