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
        return res.end(); // stop here and do not continue גד
    }
    /* ---------------------------------- POST ---------------------------------- */

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', // [get the req data using 'on'] add a data listener to data event ,every time new chunk is ready to read
            (chunk) => { // the function to execute when data came
                console.log(chunk); // <Buffer 6d 65 73 73 61 67 65 3d 66 64 66> we can't work with that
                body.push(chunk);
            });
        return req.on('end', () => {// add a end listener
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1]; // message = same_text >> 'key' = string

            //! fs.writeFileSync('message.txt', message); // creat a text if use 'writeFileSync' it will block running
            fs.writeFile('message.txt', message, (err) => { // finish creat file
                res.statusCode = 302; // like use res.writeHead(302, {'Location', '/'});
                res.setHeader('Location', '/');
                return res.end();
            });

        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<head><title></title>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
