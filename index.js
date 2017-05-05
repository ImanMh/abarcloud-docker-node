var express = require('express');

var app = new express();

app.get('*', (req, res) => {
	return res.send('OK!');
});

app.listen(8080, () => {
	console.log('http://localhost:8080');
});

