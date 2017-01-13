#!/usr/bin/env node
var fs = require('fs');
fs.readFile(__dirname + "/" + process.argv[2], function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var x = data.toString().split('\n').map(JSON.parse);
        process.stdout.write(JSON.stringify(x));
    }
});
