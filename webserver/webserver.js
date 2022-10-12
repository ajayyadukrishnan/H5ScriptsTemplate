// var connect = require('connect');
// var serveStatic = require('serve-static');

// function printUsageAndExit() {
// 	console.log("Usage:");
// 	console.log("node webserver.js <port> \"<path>\"");
// 	console.log("Examples:");
// 	console.log("node webserver.js 8080 \"../\"");
// 	console.log("node webserver.js 80 \"C:/Web/MyApplication\"");
// 	process.exit();
// }

// var args = process.argv;
// if (args.length != 4) {
// 	printUsageAndExit();
// }

// var port = args[2];
// var path = args[3];

// console.log('Starting web server at localhost:' + port + " for directory \"" + path + "\"");
// connect().use(serveStatic(path)).listen(port);


/*const express = require('express');
const path = require('path');
const serve = require('serve')
const js = ccccccccccccc;
const ts = path.join(__dirname, '../scripts/typescript/build');

const port = 8080

var app = express();

app.use("/js", express.directory(path.join(__dirname, '../scripts/javascript')));
app.use("/ts", express.directory(path.join(__dirname, '../scripts/typescript/build')));

serve()

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
    // console.log(__dirname)
});*/

const handler = require('serve-handler');
const http = require('http');

function printUsageAndExit() {
    console.log("Usage:");
    console.log("node webserver.js <port>");
    console.log("Examples:");
    console.log("node webserver.js 8080");
    process.exit();
}


var args = process.argv;

if (args.length != 3) {
    printUsageAndExit();
}

var port = args[2];

const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options
    return handler(request, response, {
        public: "../scripts",
    });
});

server.listen(port, () => {
    console.log('Running at http://localhost:' + port);
});