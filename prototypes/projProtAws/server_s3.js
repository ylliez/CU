const express = require('express');
const portNumber = 4200;
const app = express();
const server = require("http").createServer(app);
// uninstall for multer
// const fileupload = require("express-fileupload");
const fs = require('fs');
const bodyParser = require('body-parser');
let path = require('path');


const multer = require('multer')
// // multer opt 1
// const upload = multer({ dest: 'public/assets/' })
// // multer opt 2
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/assets')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//         // cb(null, temporaryIDHandler)
//     }
// })
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 6
//     },
//     fileFilter: fileFilter
// });
// multer opt 3
const multerS3 = require('multer-s3-v2')


// load AWS SDK (prior install "npm install aws-sdk")
const AWS = require('aws-sdk');
// set AWS Region 
// AWS.config.update({ region: 'us-east-1' });
// // get AWS access credentials 
// // "npm install uuid"
// // 
// AWS.config.getCredentials(function (err) {
//     if (err) console.log(err.stack);
//     // credentials not loaded
//     else {
//         console.log("Access key:", AWS.config.credentials.accessKeyId);
//     }
// });

// alt: load credentials from local JSON file (https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-json-file.html)
AWS.config.loadFromPath('db_config/aws_config.json');

// creating & using AWS S3 buckets (https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html)

// Create AWS S3 service object
s3 = new AWS.S3();
const s3Bucket = 'cart451p';

// // List AWS S3 buckets
// s3.listBuckets((err, data) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data.Buckets);
//     }
// });

// // List objects in named AWS S3 bucket
// s3.listObjects({ Bucket: 'cart451p' }, (err, data) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data);
//     }
// });

// // Upload file to named AWS S3 bucket
// let uploadParams = { Bucket: 'cart451p', Key: '', Body: '' };
// let file = "/Users/mac/Downloads/CART451_proposal_assets_webmd1.jpeg";
// let fileStream = fs.createReadStream(file);
// fileStream.on('error', (err) => { console.log('File Error', err); });
// uploadParams.Body = fileStream;
// uploadParams.Key = path.basename(file);
// s3.upload(uploadParams, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } if (data) {
//         console.log("Upload Success", data.Location);
//     }
// });

// // alt Upload file
// let file = "/Users/mac/Downloads/CART451_proposal_assets_awsmedical.png"
// let params = {
//     Bucket: 'cart451p',
//     Key: path.basename(file),

// };
// s3.putObject(params, function (err, data) {
//     if (err) {
//         reject(err)
//     } else {
//         console.log("Successfully uploaded data to bucket");
//         resolve(data);
//     }
// });

let temporaryIDHandler = "defaultID";
// let temporaryIDHandler = "6343122b2bcb41a79ffaa546";

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

const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.MONGODB_URI;
const formModel = require("./db_config/DBSchemaForm.js");
mongoose.connect(dbURI);
let db = mongoose.connection;
db.once("open", async function () { console.log("mongoose connected"); })


server.listen(portNumber, function () { console.log("Server is running on port " + portNumber); });
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

function errorRoute(req, res, next) { const error = new Error('Not valid url'); res.send(error.message); }
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
            }, (err) => { console.log("Form submitted"); })
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

app.post('/uploadFoto', upload.single('photo'), (req, res) => {

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


    // console.log(req.file);
    // console.log(req.file.location);
    // let img = fs.readFileSync(req.file.path);
    // let encode_img = img.toString('base64');
    // console.log(img);
    // console.log(encode_img);
    // // let file = fs.createWriteStream('/public/assets/');
    // // s3.getObject({ Bucket: s3Bucket, Key: req.file.key }).createReadStream().pipe(file);

    // s3.getObject({ Bucket: s3Bucket, Key: req.file.key }, function (err, data) {
    //     if (err) console.log(err, err.stack);
    //     else console.log(data);
    // });

    formModel
        .updateOne({ ID: req.file.key }, {
            Photo: req.file.location
        }, (err) => {
            console.log("Photo uploaded");
            res.redirect("/profile?ID=" + req.file.key);
        })

    // let img = fs.readFileSync(req.files.posture);
    // s3.upload({
    //     Bucket: s3Bucket,
    //     Key: req.files.posture.originalFilename,
    //     Body: fs.readFileSync(req.file.path)
    // }, (err, data) => {
    //     if (err) {
    //         console.log("Error", err);
    //     } if (data) {
    //         console.log("Photo uploaded", data.Location);
    //     }
    // });
    // console.log("Photo uploaded");
    // res.redirect("/profile?ID=" + temporaryIDHandler);
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
