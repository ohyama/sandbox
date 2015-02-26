var MongoClient = require('mongodb').MongoClient,
	settings = require('./settings');

MongoClient.connect('mongodb://' + settings.host + '/' + settings.db, function(err, db) {
	if (err) { return console.dir(err) }

	console.log('connected to db.');
	db.collection('users', function(err, collection) {
		var docs = [
			{name: 'ohyama', score: 40},
			{name: 'nakayama', score: 50},
			{name: 'koyama', score: 20},
			{name: 'shimoyama', score: 60}
		];
		collection.insert(docs, function(err, result) {
			//console.dir(result);
		});
		/*
		collection.find({name: "ohyama"}).toArray(function(err, items) {
			console.log(items);
		});
		*/

		var stream = collection.find().stream();
		stream.on('data', function(item) {
			console.log(item);
		});
		stream.on('end', function() {
			console.log('stream end.');
		});

	});
});
