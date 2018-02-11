var fs = require('fs');
var path = require('path');

var af = function (dir, ext, call) {
	var result = [];
	ext = '.'+ext;
	fs.readdir(dir, function callback(err, list) {
		if(err)
			return call(err);
		for(var i=0; i<list.length; i++) {
			if(path.extname(list[i])===ext) {
				result.push(list[i]);
			}

		}
		call(null, result);
	});
}


module.exports = af;
