
// Step 5 Filtered LS

var fs = require('fs');
var path = require('path');
var ext = '.'+process.argv[3];

function af() {
	fs.readdir(process.argv[2], function callback(err, list) {
		for(var i=0; i<list.length; i++) {
			if(path.extname(list[i])===ext) {
				console.log(list[i]);
			}
		}
	});
}

af();
