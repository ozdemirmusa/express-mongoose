var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var bodyParser = require('body-parser');         
 
var port     = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
 
var Kisi = require('./model/kisi');
 
mongoose.connect("mongodb://localhost:27017/vt");
app.get('/api/getir', function(req, res) {
console.log(req.body);
	// use mongoose to get all todos in the database
	Kisi.find(function(err, kisiler) {
		// if there is an error retrieving, send the error otherwise send data
		if (err)
		res.send(err)
		res.json(kisiler); // return all employees in JSON format

	});
});

app.post('/api/ekle', function(req, res) {
	// create mongose method to create a new record into collection
console.log(req.body.ad);
	Kisi.create({
		ad : req.body.ad,
		soyad : req.body.soyad,
		yas : req.body.yas
	}, function(err, kisi) {
		if (err)
		res.send(err);
 
		// get and return all the employees after newly created employe record
		Kisi.find(function(err, kisiler) {
		if (err)
		res.send(err)
		res.json(kisiler);
		});
	});
 
});
 
app.listen(port);
console.log("App listening on port : " + port);
