// Import the HTTP module
const http = require('http');

// Define the port
const PORT = 3000;

// Define the request handler function
const requestHandler = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
};

// Create the server
const server = http.createServer(requestHandler);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
