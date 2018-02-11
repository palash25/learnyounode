// Step Async I/O operations

var fs = require('fs');
contents = undefined;


function async_func() {
	fs.readFile(process.argv[2], function callback(err, data) {
		contents = data.toString().split('\n');
		console.log(contents.length-1);
	});
}

async_func();
