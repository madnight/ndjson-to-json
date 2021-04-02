#!/usr/bin/env node
var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var x = data.toString().trim().split('\n').map(JSON.parse);
        process.stdout.write(JSON.stringify(x));
    }
});
