var express 	= require('express');
var app			= express();
var router 		= express.Router();
var http 		= require('http');
const bodyParser= require('body-parser');
const util = require("util");

/* GET home page. */
router.get('/', function(req, res, next) {
	var notesData = ""
	var options = {
		method	: 'get',
		host	: 'localhost',
		port	: 3000,
		path	: '/notes'
	}
	
	var request = http.request(options, function (resp) {
		var data = '';
		resp.on('data', function (chunk) {
			data += chunk;
		});
		resp.on('end', function () {
			var d = JSON.parse(data);
			notesData = d;
			
			res.render('index', { 
				title		: 'Simple Notes REST CRUD API Using Node.js, Express and MongoDB',
				baseUrl		: "http://localhost:3000/",
				notesData	: notesData,
			});
			
			console.log(d);
		});
	});
	
	request.on('error', function (e) {
		console.log(e.message);
	});
	
	request.end();
});

/* GET Data By ID. */
router.get('/notes/:noteId/update', function(req, res, next) {
	var id = req.params.noteId
	var notesData = ""
	var options = {
		method	: 'get',
		host	: 'localhost',
		port	: 3000,
		path	: '/notes'
	}
	
	var request = http.request(options, function (resp) {
		var data = '';
		resp.on('data', function (chunk) {
			data += chunk;
		});
		resp.on('end', function () {
			var d = JSON.parse(data);
			notesData = d;
			
			res.render('index', { 
				title		: 'Simple Notes REST CRUD API Using Node.js, Express and MongoDB',
				baseUrl		: "http://localhost:3000/",
				notesData	: notesData,
				_id			: id
			});
			
			console.log(d);
		});
	});
	
	request.on('error', function (e) {
		console.log(e.message);
	});
	
	request.end();
});

module.exports = router;