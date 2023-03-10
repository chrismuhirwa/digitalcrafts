// Create an Express app with the following routes:

// Route / that returns the string "Hello World!"
// Route /cats that returns the string "Meow!"
// Route /dogs that returns the string "Woof!"
// Route /cats_and_dogs that returns the string "Dogs and cats living together... mass hysteria!!"

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});
app.get('/cats', (req, res) => {
    res.send(`Meow!`);
});
app.get('/dogs', (req, res) => {
    res.send(`Woof!`);
});
app.get('/cats_and_dogs', (req, res) => {
    res.send(`Dogs and cats living together... mass hysteria!!`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});