const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') { // When the address only \ created a page
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // stop here and do not continue
    }
    /* ---------------------------------- POST ---------------------------------- */

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {  // get the req data using 'on'//! add listener to data event
            console.log(chunk);
            body.push(chunk);//todo
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1]; //message=text
            fs.writeFileSync('message.txt', message);// creat a text
        });

        res.statusCode = 302; // or use res.writeHead(302, {'Location', '/'});
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
