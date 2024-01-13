# REVIEW

## CART351 - Networks & Navigation

### Data Transmission
When a request is made for data, that data is broken up into many tiny chunks called packets, tagged with a unique header (includes sender/receiver port info) & an IP header which includes the sender/receiver IP addresses. The packet is then transmitted through an ethernet, WiFi or Cellular network. Once the packets reach the destination, they are reassembled again and delivered as one piece.

**Transmission Control Protocol/Internet Protocol** (TCP/IP): suite of communication protocols used to interconnect network devices and transmit data.

- **Transmission Control Protocol** (TCP) is responsible for breaking the data into packets, routing packets to the correct application on the destination computer, resending the packets if they get lost on the way, reassembling the packets in the correct order once they’ve reached the other end.

- **Internet Protocol** (IP) is responsible for sending and routing packets to other connected devices using the IP headers (i.e. the IP addresses) on each packet

**Host**: device connected to a network (e.g. computer, client, server, printer, router)

**IP address**: unique numerical identifier for a device on a TCP/IP network, used to identify and communicate with other devices.
IP addresses have a logical address, 4 sets of numbers separated by decimal points (e.g. 127.0. 0.1, local host), that is converted to a physical address (i.e. hardware MAC address) by TCP/IP software

**Domain Name**: string used to identify 1+ IP addresses, employed by users to access a website on the internet

**Domain Name System** (DNS): distributed database keeping track of all domain names of connected devices and corresponding IP addresses

**Client**: application (i.e. browser, e.g. Chrome, Firefox) running on device (e.g. computer, phone) & connected to internet.
Primary function: take user input, translate into request & send to web server (remote computer) &/|| receive response from web server, translate and display result to user.

**Server**: machine connected to internet which waits for and responds to client requests (e.g. web servers, database servers, file servers, application servers).
Primary function: store, process and deliver web pages to clients.
A server also has an IP address but also specific server software enabling it to respond to incoming client requests

**Internet Service Provider** (ISP): link b/w client and server (usu. commercial)
Primary function: do a Domain Name System (DNS) lookup to find IP address of website user is requesting via browser.

**Port Number** 16-but int IDing a specific port on a server; it is associated with a  specific IP address and refers to a specific process. HTTP defaults to port 80 & HTTPS to port 443.

**Hyper-text Transfer Protocol** (HTTP): protocol running on top of TCP/IP used by browsers and servers communicate over the Internet

**Uniform Resource Locator** (URL) universal identifier of a particular web resource, specifying:
1. protocol (e.g. https://)
2. host name (e.g. github.com)
3. file/path name (e.g. /ylliez/CART451/)

Standard URL formats include:
- web (http://)
- FTP (ftp://)
- e-mail (Mailto:)
- Usenet (news://)
- Telnet (telnet://) SSH: (ssh://) & file (file://)

[Ted Nelson, Douglas Engelbart & Tim Berners-Lee]

**Browser rendering engine**: responsible for displaying the content. receives the content of the resources (images, text, css files…) in small chunks, reads using HTML parsing algorithm, generates **Document Object Model** (DOM) and **CSS Object Model** (CSSOM) trees, combines them into render tree then applies layout (coordinates) and paints (renders pixels)


## [JavaScript & JQuery, JSON, AJAX](https://clab.concordia.ca/cart-351-json-web-services/) 
(pw: cart351issofun)

### JavaScript (Objects) w/ JQuery
*Object Initializer*: comma-delimited list of zero or more pairs of property names and associated values, enclosed in curly braces
```
let obj = { property_1:   value_1,
            property_2:   value_2,
            // ...,
            'property n': value_n };
```

### JSON

**JSON** (**J**ava**S**cript **O**bject **N**otation) is a lightweight language-independent data-interchange format, using strings to represent structured data based on & resembling JS object syntax (EXCEPT requires double quotes). 
Commonly used for transmitting data in web applications (server-client, e.g. webpage display, or v-v…)
To transmit over network, nec to *stringify* (convert JS obj to string). To access data, nec to *parse* (convert string to JS obj). JS provides a global JSON object that can parse & stringify.

```
let json = { "property_1":   "value_1",
            "property_2":   "value_2",
            // ...,
            "property n": "value_n" };
```

### AJAX

**AJAX** (**A**synchronous **J**avaScript **A**nd **X**ML) is a methodology to exchange data with a server (e.g. querying)

Asynchronous: This means that when you send a request, you wait for the response to come back, but are free to do other things while you wait. The response probably won’t come back immediately, so you set up a function that will wait for the response to be sent back by the server, and react to it once that happens.
JavaScript: is used to make a request to the server. Once the response is returned by the server, you will generally use some more JavaScript to modify the current page’s document object model in some way to show the user that the submission went through successfully.
XML: The data that you receive back from the server was first packaged up as a snippet of XML, so that it can be easily processed with JavaScript. The current trend is to use JSON objects. This data can be anything you want, and as long as you want.

Steps of an AJAX Operation:
- A client event occurs
- An XMLHttpRequest object is created
- The XMLHttpRequest object is configured
- The XMLHttpRequest object makes an asynchronous request to the Webserver.
- The Webserver returns the result containing the XML document (or JSON object).
- The XMLHttpRequest object calls the callback() function and processes the result.
- The HTML DOM is updated.

Loading simple HTML data via the JQuery load() method:
```
[selector].load( URL, [data], [callback] );
```
URL: The URL of the server-side resource to which the request is sent. It could be a CGI, ASP, JSP, or PHP script which generates data dynamically or out of a database.
data: This optional parameter represents an object whose properties are serialized into properly encoded parameters to be passed to the request. If specified, the request is made using the POST method. If omitted, the GET method is used.
callback: A callback function invoked after the response data has been loaded into the elements of the matched set. The first parameter passed to this function is the response text received from the server and second parameter is the status code.

Loading JSON from the web server and using it in an HTML page:
```
[selector].getJSON( URL, [data], [callback] );
```
URL: The URL of the server-side resource contacted via the GET method.
data: An object whose properties serve as the name/value pairs used to construct a query string to be appended to the URL, or a pre-formatted and encoded query string.
callback: A function invoked when the request completes. The data value resulting from digesting the response body as a JSON string is passed as the first parameter to this callback, and the status as the second.
In case of failure: you can additionally add a .fail(callback) function.
Verify JSON file validity at [https://jsonlint.com/](https://jsonlint.com/)


---

### [PHP](https://clab.concordia.ca/introduction-to-php/)
PHP (Originally Personal Home Page, now Hyper Text Preprocessor) is a server-side scripting language designed for dynamic web development (e.g. perform calculations, collect & process user information, interact with SQL databases).
Basic Request/Response Procedure:
- The user enters a url in the browser
- The browser looks up the IP address for the url (communicates with the Internet service called The Domain Name Service).
- The browser issues a request for the home page
- The request is sent to the server
- The server receives and accepts the request – looks for the web page on its hard drive
- The server retrieves the page and sends it to the browser
- The browser displays the page
For dynamic pages the Request & Response Procedure is more complex as it may include PHP and MySQL
- If the page contains PHP code and will pass the page to the PHP Interpreter
- The PHP interpreter executes the PHP code
- If the PHP code contains SQL statements, the PHP interpreter passes these statements to the SQL database engine.
- The database returns the results back to PHP
- The PHP interpreter returns the results of the PHP code, along with any SQL results.
- The web server returns the page to the client, which displays it

php code is contained within a specific tag:
```
<?php //all php code goes in here…?>
```
PHP code can be placed/called within a normal html page but when you have php code inserted within your html file you must save the file with a .php extension. The extension tells the server how to interpret the file so that the php code gets sent to the php processor on the web server.

Variable Naming Conventions:
- PHP variables must start with a letter or underscore “_”.
- PHP variables may only be comprised of alpha-numeric characters and underscores. a-z, A-Z, 0-9, or _ .
- Variables with more than one word should be separated with underscores, or camelCased (e.g. $my_variable || $myVariable)

### Arrays & Associative Arrays
Arrays are a list of any kind of data type (numbers, text-strings …), able to store multiple values in one single variable.

The most conventional method for getting data from the user is via an HTML form.
In order to send data to the server, an HTTP request is made. We then have two different HTTP methods for packaging the data that we want sent as part of the HTTP request: POST and GET :
The POST method is used to send data to a server to create/update a resource; The data sent to the server with POST is stored in the request body of the HTTP request 
GET is used to request data from a specified resource and is one of the most common HTTP methods.
GET passes parameters (i.e. query data) in the URL of the GET request i.e: ```/test/demo_form.php?name1=value1&name2=value2```

### [Node.js](https://nodejs.org/en/)

Node.js is an open source server environment using JS.
Node.js is  a JS runtime built on Chrome's V8 JS engine (C++)
Employed to build powerful, fast and scalable web applications using an event-driven, non-blocking IO asynchronous model, unlike PHP & Apache which involve single threads that take up memory

Node.js is accessed through the terminal by typing the command node
Individual JS files can also be executed using node by navigating to parent folder (`cd`) then calling
```node [file_name].js```

### NPM
NPM stands for **N**ode.js **P**ackage **M**anager and is used to install node programs/modules (in the node_modules folder)
