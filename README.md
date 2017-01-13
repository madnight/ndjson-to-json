# ndjson-to-json
Converts NDJSON to JSON

The opposite of the package [json-to-ndjson](https://www.npmjs.com/package/json-to-ndjson)

NDJSON stands for Newline delimited JSON and is a convenient format for storing or 
streaming structured data that may be processed one record at a time. 
It works well with unix-style text processing tools and shell pipelines. 
It's a great format for log files. It's also a flexible format 
for passing messages between cooperating processes.
Its also the download format that is used in Google Big Query.

http://ndjson.org

# Installation
npm install -g ndjson-to-json

# Usage
ndjson-to-json file.json
