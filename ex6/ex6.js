// Step 6 Modularize ex5

var mod = require('./mod');
var ext = process.argv[3];
var dir = process.argv[2];

function display(err, result) {
	if(err!==null)
		console.log(err);
	for(var i=0; i<result.length; i++) {
		console.log(result[i]);
	}
}

mod(dir, ext, display);
