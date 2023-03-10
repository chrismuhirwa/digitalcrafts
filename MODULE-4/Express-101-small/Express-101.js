// Small
// Hello World Server
// Create an Express App with a route at / that returns "Hello World."

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

const friends = [
{
    name: "Finley",
    handle:  "@fin",
},

{
    name: "Skyler",
    handle: "@blue",
},

{
    name: "Lennon",
    handle: "@walrus",
},

{
    name: "Charlie",
    handle: "@chaz",
},

]

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