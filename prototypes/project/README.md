# Process
## Initialize npm
`npm init` initializes node package manager (npm); will create a JSON file (`package.json`) to store meta data and dependencies about the project
## Install Express.js
`npm install express --save` installs Express.js, a Node module to implement local http web server; will create a JSON file (`package-lock.json`).  
The save flag ensures that the dependency will be written to your `package.json` file
## Setup server script
- Create a new javascript file called `server.js` in the root directory; this will be the main server-side script.  
- Require Express module: `const express = require('express');`
- Create instance of the Express object: `const app = express();`  
- Define the port number where the server should run/listen for requests: `const portNumber = 4200;`  
(**conventionally  > 1000** so as to not conflict with other servers, e.g. 80 default HTTP port)
- Allow the server to listen for incoming requests on port:  
`app.listen(portNumber, function () {`  
`  console.log("Server is running on port " + portNumber); `  
`});`
- Run  server script: `node server.js`  
(once it starts running, **it never stops!** until you press `CTRL+C`)
- Verify if sever is live on browser by accessing `http://localhost:4200/` (localhost is own server)
- Specify default route: `app.get('/', defaultRoute);` (using the HTTP verb get() w/ argument path & function to execute)
- Specify default route function:  
`function defaultRoute(request,response){`  
`// console.log(request);`  
`// console.log(response);`  
`console.log(request.url);`  
`response.send("HELLO WORLD");`  
`}`  


The Express module is not just an HTTP Server but also by default gives you a router – meaning that you don’t have to check manually for the URL to decide what to do. Instead, you define the application’s routing with `app.get()`, `app.post()`, `app.put()`. These 



### [Middleware](https://expressjs.com/en/guide/using-middleware.html)
Middleware (MW) is software that allows you to organise different routes, essentially forwarding requests to a specific function. The Express library supports the use of MW. Order in which MW gets called matters!
Pass it to Express app as .use function
Can subdivide URLs according to access

### Static pages
Static pages: ready made HTML pages, style sheets and other JavaScript libraries / scripts that need to be served to the client.
We have options here – we could use templating tools (jade, moustache,react …) -> which are currently beyond the scope of this workshop… OR, we can use another Node module to allow us to serve static pages.
Lets start by installing the needed module: `npm install node-static --save`

All client side files should be in a folder called public.

**Differentiate user request by URL!!**
Desire for user not to access html itself, make route for URL (custom name); still accessible from default URL --> incorporate error handling to prevent undue access

---

Passing vars as arguments in the URL w/ a GET request (limited & not secure)

AJAX - asynchronous JS & XML. Request protocol not requiring page reload

Fetch API: HTML 5 browser-side API (simpler, no libraries as with AJAX/jQuery); uses promises rather than callbacks


GET request

POST request
event.preventDefault(); --> prevent submission w/ default values


type of data, destination, manipulations
node.js is one framework allowing for multiple server-side constructions