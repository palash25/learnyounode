// Step 3 Sync I/O operations

var fs = require('fs');
file =  fs.readFileSync(process.argv[2]);
contents = file.toString().split('\n');
console.log(contents.length-1);
