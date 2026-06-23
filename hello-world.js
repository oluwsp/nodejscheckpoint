/** @format */

// task 1
console.log("Hello World");

// task 2
const http = require("http");

const server = http.createServer((req, res) => {
	res.write("Hello Node!!!!\n");
	res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});