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
`npm install -g ndjson-to-json`

# Usage
`ndjson-to-json ndjson-file.json > file.json`

Or use with npx without installing it on beforehand:
`npx ndjson-to-json file.json`

# Example
Github Licenses downloaded from Google BigQuery in NDJSON format
```JavaScript
{"license":"mit","count":"1551711"}
{"license":"apache-2.0","count":"455316"}
{"license":"gpl-2.0","count":"376453"}
{"license":"gpl-3.0","count":"284761"}
{"license":"bsd-3-clause","count":"161041"}
{"license":"bsd-2-clause","count":"57412"}
{"license":"unlicense","count":"43899"}
{"license":"lgpl-3.0","count":"38213"}
{"license":"agpl-3.0","count":"38034"}
{"license":"cc0-1.0","count":"28600"}
{"license":"epl-1.0","count":"24074"}
{"license":"lgpl-2.1","count":"23872"}
{"license":"isc","count":"17690"}
{"license":"mpl-2.0","count":"17421"}
{"license":"artistic-2.0","count":"9413"}
```

Github Licenses after converstion with ndjson-to-json to JSON
```JavaScript
[{"license":"mit","count":"1551711"},{"license":"apache-2.0","count":"455316"},{"license":"gpl-2.0","count":"376453"},{"license":"gpl-3.0","count":"284761"},{"license":"bsd-3-clause","count":"161041"},{"license":"bsd-2-clause","count":"57412"},{"license":"unlicense","count":"43899"},{"license":"lgpl-3.0","count":"38213"},{"license":"agpl-3.0","count":"38034"},{"license":"cc0-1.0","count":"28600"},{"license":"epl-1.0","count":"24074"},{"license":"lgpl-2.1","count":"23872"},{"license":"isc","count":"17690"},{"license":"mpl-2.0","count":"17421"},{"license":"artistic-2.0","count":"9413"}]
```
