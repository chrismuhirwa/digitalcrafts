const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

app.get('/friends', (req, res) => {
    const friend = friends[0].name;
    res.send(`Say hi to ${friend}`);
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});