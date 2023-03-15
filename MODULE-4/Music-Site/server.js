const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

const db = require("./db");

app.use(express.static("public"));

app.get('/', (req, res) => {
    const htmlData = `<div>
                        <h1>My Music Site</h1>
                        <h2> Welcome to my music site about my favourite artist albums and songs!</h2>
                        <img src="/images/homepage.jpg" style="display: block; margin-bottom: 20px;  width ="400" height="600"/>
                        <a href="/albums">Check out my favourite albums!</a>
                        </div>`;
    res.send(htmlData);
});

app.get('/albums', (req, res) => {
    
    const list = db.map((album, index) => {
        return `<li><a href="/albums/${index}"> ${album.title}</a></li>`;
    }).join("");
    
    const htmlData = `<div>
                        <h1>My Favourite 2PAC Albums</h1>
                        <ul>
                         ${list}
                        </ul>
                        </div>`;
    res.send(htmlData);
});

app.get('/albums/:id', (req, res) => {
    const {id} = req.params;
    const title = db[id].title;
    const image = db[id].image;
    
    
    const songs = db[id].songs.map((song) => {
        return `<li>${song}</li>`;
}).join("");

    const htmlData = `<div>
                        <h1>All About ${title}</h1>
                        <ul>
                        ${songs}
                        </ul>
                        <img src="/images/${image}" style="display: block; margin-bottom: 20px;  width ="400" height="600"/>
                        </div>`;
    res.send(htmlData);
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});