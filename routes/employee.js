var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});
router.post('/save', function(req, res, next) {
	console.log(" employee save");
	console.log(req.body);
	var emp=req.body;
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		//password : 's3kreee7',
		database : 'test'
	});

	connection.connect()

	connection.query('INSERT INTO employee SET ?',emp, function (err, results, fields) {
		if (err) throw err

		console.log('The solution is: ', results);
		connection.end()
		res.json({status:1});
	});
});

router.get('/emplist', function(req, res, next) {
	console.log(" employee list");

	var columns=["name", "email","contact"];
	var iDisplayStart=req.query.iDisplayStart;
	var iDisplayLength=req.query.iDisplayLength;
	console.log(iDisplayLength);
	console.log(iDisplayStart);
	var sSearch=req.query.sSearch;



	var mysql = require('mysql')
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		//password : 's3kreee7',
		database : 'test'
	});

	connection.connect();

	connection.query({sql: 'SELECT COUNT(*) AS count FROM employee', timeout: 60000}, function (error, results, fields) {

		if (error) {
			throw error;
		}
		console.log(results[0].count + ' rows');
		connection.query('SELECT * FROM employee LIMIT '+iDisplayLength+' OFFSET '+iDisplayStart, function (error, empList, fields) {
			if (error) throw error;
			connection.end()
			res.send({
				"aaData":empList, "iTotalRecords": results[0].count, "iTotalDisplayRecords": results[0].count
			});
		});
		
	});
});


module.exports = router;
