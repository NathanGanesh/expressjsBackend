var dbcon = require('../config/db_connection');

var connection = dbcon.getConnection();

connection.connect();

var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
	connection.query('select * from product', (err, records, fields) => {
		if (err) {
			console.log(err);
		} else {
			res.send(records);
		}
	});
});

router.get('/:id', (req, res) => {
	connection.query(`select * from product where id = ${req.params.id}`, (err, records, fields) => {
		if (err) {
			console.log(err);
		} else {
			res.send(records);
		}
	});
});

router.post('/', (req, res) => {
	let id = req.body.id;
	let name = req.body.name;
	let description = req.body.description;
	let price = req.body.price;

	connection.query(
		`insert into product values("${id}", "${name}", "${description}", "${price}")`,
		(err, records, fields) => {
			if (err) {
				console.log(err);
			} else {
				res.send({ insert: 'succes' });
			}
		}
	);
});

router.put('/', (req, res) => {
	let id = req.body.id;
	let name = req.body.name;

	let price = req.body.price;

	connection.query(`update product set name="${name}", price="${price}" where id=${id}`, (err, records, fields) => {
		if (err) {
			console.log(err);
		} else {
			res.send({ update: 'succes' });
		}
	});
});



router.delete('/:id', (req, res) => {
	connection.query(`delete from product where id = ${req.params.id}`, (err, records, fields) => {
		if (err) {
			console.log(err);
		} else {
			res.send({delete:"succes"});
		}
	});
});
module.exports = router;
