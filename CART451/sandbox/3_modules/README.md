# [NODE MODULES](https://clab.concordia.ca/cart-451-morrrreeee-node-js/)
Node modules provide a way to re-use code in your Node application. If you have already written a Node application, you already have used modules: built in / installed via npm etc.
A module is a piece of re-usable code with a defined interface that allows for applications that use them – to access this interface via its methods/objects etc…
Within a node application – if the module is installed then you can access it using the require() statement. For example, if we wanted to use the path module:
```
//use the path module:https://nodejs.org/api/path.html
const path = require('path');
//1: get ext name .. .
console.log(path.extname('index.js'));
//2: get the directories from a file path ()
console.log(path.dirname(__dirname+"index.js"))
//__dirname is a global::
//https://nodejs.org/docs/latest/api/globals.html
//...
```
`require()` finds and loads the necessary module given the path as a parameter. If the identifier begins with ‘/’, ‘../’ or ‘./’ it assumes a relative path and attempts to load the module at that path. If the identifier isn’t a relative path, the following locations are searched:
- Node core modules
- Node_modules directory, which checks recursively by traversing the directory structure to the root directory
- Path pointed to by NODE_PATH
- $HOME/.node_modules
- $HOME/.node_libraries
- $PREFIX/lib/node_modules