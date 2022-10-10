const express = require('express');
const portNumber = 4200;
const app = express();
// uninstalled for multer
// const fileupload = require("express-fileupload");
const fs = require('fs');
const server = require("http").createServer(app);
let bodyParser = require('body-parser');
const multer = require('multer')
// const upload = multer({ dest: 'public/assets/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
        // cb(null, temporaryIDHandler)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 6
    },
    fileFilter: fileFilter
});

const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.MONGODB_URI;
const formModel = require("./db_config/DBSchemaForm.js");
mongoose.connect(dbURI);
let db = mongoose.connection;
db.once("open", async function () { console.log("mongoose connected"); })

let temporaryIDHandler;

server.listen(portNumber, function () {
    console.log("Server is running on port " + portNumber);
});
// app.listen(portNumber, () => { console.log("Server is running on port " + portNumber); });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/index.html', errorRoute);
app.use('/phys.html', errorRoute);
app.use('/form.html', errorRoute);
app.use(express.static(__dirname + '/public'));
// app.use(fileupload());
app.get('/', defaultRoute);
app.use('/form', formRoute);
// app.post('/submitForm', handleForm);
app.use('/foto', fotoRoute);
// app.use('/submitFoto', handleFoto);
app.use('/phys', physRoute);

function errorRoute(req, res, next) {
    const error = new Error('Not valid url');
    res.send(error.message);
}
function defaultRoute(req, res, next) { res.sendFile(__dirname + '/public/client.html'); }
function formRoute(req, res, next) { res.sendFile(__dirname + '/public/form.html'); }
function fotoRoute(req, res, next) { res.sendFile(__dirname + '/public/foto.html'); }
function physRoute(req, res, next) { res.sendFile(__dirname + '/public/phys.html'); }

app.post('/submitForm', upload.none(), (req, res) => {
    // function handleForm(req, res) {
    // console.log(req.body);
    const entry = new formModel({
        ID: "",
        Name: req.body.name,
        Age: req.body.age,
        Gender: req.body.gender,
        Nationality: req.body.country,
        Telephone: req.body.number,
        Address: req.body.address,
        Cohabitants: req.body.cohabitants,
        Professional: req.body.professional,
        Marital: req.body.marital,
        Belief: req.body.belief,
        Photo: ""
    });
    entry.save().then((result) => {
        // response.json(res);
        // console.log(result);
        temporaryIDHandler = result.id;
        // console.log(temporaryIDHandler);
        formModel
            .updateOne({ _id: temporaryIDHandler }, {
                ID: temporaryIDHandler
            }, (err) => { console.log("ID updated"); })
        // res.send("submitted");
        res.redirect("/foto");
    });
});

function handleFoto(req, res) {
    console.log(req.files);
    if (!req.files) {
        res.send("File was not found");
        return;
    }
    let temp_file = req.files.posture;
    let imagePath = __dirname + '/public/assets/' + req.files.posture.name;
    temp_file.mv(imagePath, function (err) {
        if (err)
            return res.status(500).send(err);
        formModel
            .updateOne({ ID: temporaryIDHandler }, {
                Photo: imagePath
            }, (err) => { console.log("Photo uploaded"); })
        // .then(result => {
        //     console.log(result);
        // result.forEach(function (result) {
        //     formModel.update({ _id: result._id }, {
        //         photo: "done"
        //     },
        //         function (err) { console.log("now") })
        // })
        // res.send('File uploaded.');
    });
}

// console.log(req.file);
// formModel
//     .updateOne({ ID: temporaryIDHandler }, {
//         Photo: imagePath
//     }, (err) => { console.log("Photo uploaded"); })

// if (!req.files) {
//     res.send("File was not found");
//     return;
// }
// let temp_file = req.files.posture;
// let imagePath = __dirname + '/public/assets/' + req.files.posture.name;
// temp_file.mv(imagePath, function (err) {
//     if (err)
//         return res.status(500).send(err);
//     formModel
//         .updateOne({ ID: temporaryIDHandler }, {
//             Photo: imagePath
//         }, (err) => { console.log("Photo uploaded"); })
// res.send("/client");
// })
// })

app.post('/uploadFoto', upload.single('posture'), (req, res) => {

    // let img = fs.readFileSync(req.file.path);
    // let encode_img = img.toString('base64');
    // // let final_img = new Buffer(encode_img, 'base64');
    // // let final_img = {
    // //     contentType: req.file.mimetype,
    // //     image: new Buffer(encode_img, 'base64')
    // // };
    // formModel
    //     .updateOne({ ID: temporaryIDHandler }, {
    //         // contentType: req.file.mimetype,
    //         // Photo: final_img
    //         Photo: {
    //             mimeType: req.file.mimetype,
    //             encodedImg: encode_img
    //         }
    //     }, (err) => {
    //         console.log("Photo uploaded");
    //         // console.log(img);
    //         // console.log(encode_img);
    //         res.redirect("/profile?ID=" + temporaryIDHandler);
    //     })

    console.log("Photo uploaded");
    res.redirect("/profile?ID=" + temporaryIDHandler);
})

app.use('/profile', (req, res, next) => {
    let queryID = req.query.ID;

    if (queryID != undefined) {
        console.log("if: " + queryID);
        res.sendFile(__dirname + '/public/profile.html');
        // res.sendFile(__dirname + '/public/profile.html?ID=' + queryID);
        // res.redirect("/profile");
    }
    else { console.log("else: " + queryID); }
    // res.sendFile(__dirname + '/public/profile.html');
    // formModel
    //     .find({ ID: req.query.ID }).then((result) => { console.log(result[0].Name); });
    // res.sendFile(__dirname + '/public/profile.html');
});

app.use('/profileQuery', (req, res, next) => {
    // console.log(req.query.queryID);
    formModel.find({ ID: req.query.queryID }).then((result) => {
        // console.log(result[0].Name);
        res.send(result[0]);
        // next();
    })
})

// app.use('/profileQuery', (req, res) => {
//     res.redirect("/profile");
// })
