const express = require('express');
const cors = require('cors');
const server = express();


server.use(express.json());
server.use(cors());
server.use(logger)

server.get('/', (req, res) => {
    res.send('<h2>Server is running</h2>');
});


function logger(req, res, next) {
    const { method, originalUrl } = req;
    console.log(`${method} to ${originalUrl} at ${Date.now()}`);
  
    next();
}

module.exports = server;