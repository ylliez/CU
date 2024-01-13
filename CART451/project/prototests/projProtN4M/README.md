`npm init`
`npm install express`
`npm install body-parser`
`npm install cookie-parser`
`npm install max-api`
`npm uninstall max-api`
`npm install path`
`npm install ws`
`npm install ejs`

Copy package from n4m.sockets & `npm install`



Express is a framework for building HTTP servers, accessible by HTTP clients (e.g. browsers), which make requests and receive responses in return.

Express depends on Node.js. It requires features provided by Node.js (like the ability to listen for network requests) which are not available in browsers.

Browserify can bundle up JavaScript which is written using modules into non-module code that can run in a browser but only if that code does not depend on Node.js-specific features. (i.e. if the JS modules are either pure JS or depend on browser-specific features).

Browserify cannot make Express run inside the browser.

When you run your JS program using Node.js you can then type the URL to the server the program creates into the browser’s address bar to connect to it.
