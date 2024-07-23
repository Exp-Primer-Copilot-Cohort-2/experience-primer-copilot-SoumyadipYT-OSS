// Create web server

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    switch (path) {
        case '/comments':
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream('./comments.html').pipe(res);
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
            body += chunk;
            });
            req.on('end', () => {
            const comment = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(comment));
            });
        }
        break;
        case '/comments.json':
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify([]));
        }
        break;
        case '/comments.css':
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.createReadStream('./comments.css').pipe(res);
        break;
        case '/comments.js':
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        fs.createReadStream('./comments.js').pipe(res);
        break;
        case '/comments.png':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.createReadStream('./comments.png').pipe(res);
        break;
        case '/comments.jpg':
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        fs.createReadStream('./comments.jpg').pipe(res);
        break;
        case '/comments.gif':
        res.writeHead(200, { 'Content-Type': 'image/gif' });
        fs.createReadStream('./comments.gif').pipe(res);
        break;
        case '/comments.mp4':
        res.writeHead(200, { 'Content-Type': 'video/mp4' });
        fs.createReadStream('./comments.mp4').pipe(res);
        break;
        case '/comments.mp3':
        res.writeHead(200, { 'Content-Type': 'audio/mp3' });
        fs.createReadStream('./comments.mp3').pipe(res);
        break;
        default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});