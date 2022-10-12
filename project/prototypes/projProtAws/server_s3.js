const express = require('express');
const portNumber = 4200;
const app = express();
const server = require("http").createServer(app);
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
require("dotenv").config();
// uninstall for multer
// const fileupload = require("express-fileupload");
// load AWS SDK (prior install "npm install aws-sdk")
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
// // load AWS credentials from local JSON file
// AWS.config.loadFromPath('db_config/aws_config.json');
// create AWS S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });
// define project specific bucket
const s3Bucket = 'cart451p';

// define temporary ID handler for profile retrieval
let temporaryIDHandler = "defaultID";

// initialize multer
const multer = require('multer');
const multerS3 = require('multer-s3-v2');
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: s3Bucket,
        acl: 'public-read',
        contentType: function (req, file, cb) {
            cb(null, file.mimetype);
        },
        key: function (req, file, cb) {
            cb(null, temporaryIDHandler)
        }
    })
})

// initialize mongoose
const mongoose = require("mongoose");
const dbURI = process.env.MONGODB_URI;
const formModel = require("./db_config/DBSchemaForm.js");
mongoose.connect(dbURI);
let db = mongoose.connection;
db.once("open", async function () { console.log("Mongoose connected"); })

server.listen(portNumber, function () { console.log("Server is running on port " + portNumber); });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/client.html', errorRoute);
app.use('/form.html', errorRoute);
app.use('/foto.html', errorRoute);
app.use('/phys.html', errorRoute);
app.use('/profile.html', errorRoute);
app.use(express.static(__dirname + '/public'));
app.get('/', defaultRoute);
app.use('/form', formRoute);
app.use('/foto', fotoRoute);
app.use('/phys', physRoute);

function errorRoute(req, res, next) { const error = new Error('Not valid url'); res.send(error.message); }
function defaultRoute(req, res, next) { res.sendFile(__dirname + '/public/client.html'); }
function formRoute(req, res, next) { res.sendFile(__dirname + '/public/form.html'); }
function fotoRoute(req, res, next) { res.sendFile(__dirname + '/public/foto.html'); }
function physRoute(req, res, next) { res.sendFile(__dirname + '/public/phys.html'); }

app.post('/submitForm', upload.none(), (req, res) => {
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
        temporaryIDHandler = result.id;
        formModel
            .updateOne({ _id: temporaryIDHandler }, {
                ID: temporaryIDHandler
            }, (err) => { console.log("Form submitted"); })
        res.redirect("/foto");
    });
});

app.post('/uploadFoto', upload.single('photo'), (req, res) => {
    formModel
        .updateOne({ ID: req.file.key }, {
            Photo: req.file.location
        }, (err) => {
            console.log("Photo uploaded");
            res.redirect("/profile?ID=" + req.file.key);
        })
})

app.use('/profile', (req, res, next) => {
    let queryID = req.query.ID;

    if (queryID != undefined) {
        console.log("Profile ID: " + queryID);
        res.sendFile(__dirname + '/public/profile.html');
        // res.redirect("/profile");
    }
    else { console.log("else: " + queryID); }
})

app.use('/profileQuery', (req, res, next) => {
    // console.log(req.query.queryID);
    formModel.find({ ID: req.query.queryID }).then((result) => {
        // console.log(result[0].Name);
        res.send(result[0]);
        // next();
    })
})
