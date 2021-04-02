#!/usr/bin/env node
var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var data = JSON.stringify(data.toString().trim().split('\n').map(JSON.parse));
        if (process.argv[3] == "-o" && process.argv[4]) {
           fs.writeFile(process.argv[4], data, function (err) {
             if (err) return console.log(err);
           });
            return;
        }
        process.stdout.write(data);
    }
});
