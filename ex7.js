// Step 7 HTTP Request

var http = require('http');

var url = process.argv[2];

http.get(url, function callback(response) {
	response.setEncoding('utf-8');
	response.on("data", function (data) {
		console.log(data);
	});
})