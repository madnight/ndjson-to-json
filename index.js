#!/usr/bin/env node
const fs = require('fs');
fs.readFile(process.env.PWD + "/" + process.argv[2], function (err, data) {
    if (err) {
        console.log(err);
    } else {
        const x = data.toString().trim().split('\n').map(JSON.parse);
        const convertedFileData = JSON.stringify(x);
        fs.writeFile(process.env.PWD + "/" + process.argv[2] + '_coverted', convertedFileData, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    }
});
