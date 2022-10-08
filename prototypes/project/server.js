// console.log("hello world from Node");

const express = require('express');
const portNumber = 4200;

const app = express();

app.listen(portNumber, () => { console.log("Server is running on port " + portNumber); });

app.use('/index.html', errorRoute);
app.use('/form.html', errorRoute);
app.use('/phys.html', errorRoute);
app.get('/', defaultRoute);
// app.use(express.static(__dirname + '/public')); // make visible on client side, anything in public server is accessible
app.use('/form', formRoute);
// app.use('/phys', physRoute);
// app.use('/passingTheVars', handleGetVars);
// app.use(fileuploadMiddleWare()); // specify to express that using this MW module
// app.use('/dataUpload', handlePostedData);

function errorRoute(req, res, next) {
    const error = new Error('Not valid url');
    res.send(error.message);
}

function defaultRoute(request, response) {
    // console.log(request);
    // console.log(response);
    console.log(request.url);
    response.send("HELLO WORLD");
}

function formRoute(req, res, next) {
    res.sendFile(__dirname + '/public/form.html');
}

// function fruitRoutes(req, res, next) {
//     console.log("IN FRUIT FUNCTION ");
//     console.log(req.url);
//     res.send("WE ARE HERE FRUIT ROUTE");
// }

// function handleGetVars(request, response, next) {
//     console.log(request.url);
//     console.log(request.query);
//     response.send("GOT IT! THANKS!");
// }

// function handlePostedData(request, response) {
//     console.log(request.body); //body of packet
//     console.log(request.files); //request
//     response.send("GOT IT! THANKS!");
//     if (!request.files) {
//         response.send("File was not found");
//         return;
//     }
//     // using the name attributes of the form fields ...
//     console.log("the color chosen:: " + request.body.color);
//     console.log("the favorite city chosen:: " + request.body.city);

//     // here is the field name of the form
//     let temp_file = request.files.imageF;

//     let imagePath = __dirname + '/public/images/' + request.files.imageF.name;
//     // Use the mv() method to place the file somewhere on your server
//     temp_file.mv(imagePath, function (err) {
//         if (err)
//             return response.status(500).send(err);
//         response.send('File uploaded!');
//     });
// }
