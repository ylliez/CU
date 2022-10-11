# Process
## Initialize npm
`npm init` initializes node package manager (npm); will create a JSON file (`package.json`) to store meta data and dependencies about the project
## Install Express.js
Install Express.js, a Node module to implement local http web server: `npm install express --save`  
Will create a JSON file (`package-lock.json`); the save flag ensures that the dependency will be written to your `package.json` file
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

## Install Static
`npm install node-static --save`; install node static module, which allows us to serve static pages
All client side files should be in a folder called public.

## Middleware
- Specify default route: `app.get('/', defaultRoute);` (using the HTTP verb get() w/ argument path & function to execute)
- Specify default route function:  
`function defaultRoute(request,response){`  
`// console.log(request);`  
`// console.log(response);`  
`console.log(request.url);`  
`response.send("HELLO WORLD");`  
`}`  


npm install express-fileupload --save

## Install Mongoose
`npm install mongoose`
- `npm install dotenv` then make “.env” file which will be environment variables for server, invisible to file system
- Add Node connection string : "mongodb+srv://isp:QHQvxv@cluster0.7xvja0v.mongodb.net/CART451?retryWrites=true&w=majority"
- Require .env file in server script: `require(“dotenv”).config();`


npm install body-parser --save
npm install multer --save



## AWS
- Install AWS node library: `npm install aws-sdk`
- Load AWS SDK: `const AWS = require('aws-sdk');`
- Set AWS Region: `AWS.config.update({ region: 'us-east-1' });`
- Make AWS access credentials
- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
Get AWS access credentials: 
// "npm install uuid"
// 
AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
});

alt: load credentials from local JSON file (https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-json-file.html): `AWS.config.loadFromPath('db_config/aws_config.json');`