## BMI Calculation

phase 1:
You should develop a small HTML file that uses the FORM element though which the user will enter the weight (kg) and the height (meter) and get the calculated BMI. This form should send the 'weight' and the 'height' parameters to the bmi.php script at http://www.abelski.com/courses/xhtml/bmi.php. These parameters should be sent via the HTTP GET method.

Phase 2:
You should develop the server side using Node.js and update your HTML file accordingly.

---

HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

```javascript
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { ContentTypes: "text/plain" });
    res.end("Hello World\n");
  })
  .listen(1000);
```

- **function (req, res)**

An object representing a function (Receiving 2 variables: 'req' and 'res') _in fact it is a Design Pattern!_

- **res.writeHead(200,**

List of HTTP status codes: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

- **{'ContentTypes':'text/plain'})**

References to Objects ,Mime Types Specification: is a standard that indicates the nature and format of a document, file, or assortment of bytes.

- **res.end('Hello World from Cloud9\n')**

Here they sent a text to finish

- **.listen(1000)**

now http server start (whit for req)

---

The url module allows us to access the query string. Calling the parse method on the url module passing over req.url as
the first argument and true as the second one will get us an object that its properties are the parameters the query string
includes. The keys are the parameters names. The values are their values.

```javascript
var http = require("http");
var url = require("url"); // using modal url
http
  .createServer(function (req, res) {
    //var area = req.query.width * req.query.height;
    res.writeHead(200, { "Content-Type": "text/plain" });
    var queryObject = url.parse(req.url, true).query;
    // bcz we using url modal we can using parse | true: to get value from queryString| .query Get back an reference to object
    res.end("area is " + queryObject.width * queryObject.height); //
  })
  .listen(1000);
```

---

# <form action="">

**The 'action' Attribute** Adding the 'action' attribute into the <form> starting tag
we can specify the URL address of the server side
application that will be called when the form is submitted.
All values filled within the form will be sent at that URL address.

**The 'method' Attribute** Adding the 'method' attribute into the <form> starting tag
we can specify the HTTP protocol to be used when the form
is submitted and all entered data sent.
