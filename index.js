const server = require('./server.js');

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});