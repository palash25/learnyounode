var http = require('http');
const BufferList = require('bl');


var url = process.argv[2];
var buff = new BufferList();


http.get(url, function callback(response) {
	response.setEncoding('utf-8');
	response.pipe(BufferList(function (err, data) {
		buff.append(new Buffer(data));
		console.log(buff.length);
		console.log(buff.toString());
	}));
});

