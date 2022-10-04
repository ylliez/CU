const express = require("express");
const portNumber = 4200;
const app = express();
const server = require("http").createServer(app);
const fs = require("fs");

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/varsToMongo', handleGetVars);

require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
console.log(url);

const arbresModel = require("./db_config/mtlArbresEntry.js");
const abattModel = require("./db_config/mtlAbattagesEntry.js");
const quartModel = require("./db_config/mtlQuartiersEntry.js");

mongoose.connect(url);
let db = mongoose.connection;
db.once("open", async function () {
  console.log("connected");
  /* DATASET mtlArbres */
  // // BASIC QUERIES
  // // Query number of documents in dataset (i.e. total number of trees in mtlArbres dataset)
  // arbresModel.countDocuments().then((result) => { console.log("Total trees: " + result); });
  // // Query number of documents for which the ARROND field is 5 (i.e. number of trees in Plateau)
  // arbresModel.countDocuments({ ARROND: "5" }).then((result) => { console.log("Total trees in Plateau: " + result); });
  // // Query number of documents for which the Longitude and Latitude fields are within a range of values (i.e. number of trees in a perimeter)
  // arbresModel.countDocuments({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 } }).then((result) => { console.log("Total results in vicinity of 3655 blvd St Laurent: " + result); });
  // // Query documents for which the Longitude and Latitude fields are within a range of values (i.e. trees in a perimeter)
  // arbresModel.find({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 } }).then((result) => { console.log(result); });
  // // Query number of documents for which the Longitude and Latitude fields are within a range of values and Rue field matches a specific street name (i.e. number of trees in perimeter on street)
  // arbresModel.countDocuments({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, Rue: "Boulevard Saint-Laurent" }).then((result) => { console.log("Total results in immediate vicinity of 3655 blvd St Laurent: " + result); });
  // // Query documents for which the Longitude and Latitude fields are within a range of values and Rue field matches a specific street name (i.e. trees in perimeter on street)
  // arbresModel.find({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, Rue: "Boulevard Saint-Laurent" }).then((result) => { console.log(result); });
  // // Query documents for which the Longitude and Latitude fields are within a range of values and Rue field matches a specific street name (i.e. trees in perimeter on street), returning specific set of fields (i.e. bare minimum info)
  // arbresModel.find({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, Rue: "Boulevard Saint-Laurent" }, 'No_civique ESSENCE_ANG Longitude Latitude').then((result) => { console.log(result); });
  // // Use resulting info for Maps search (e.g. https://www.google.com/maps/place/45%C2%B030'52.2%22N+73%C2%B034'25.3%22W/@45.5144904,-73.5738057,40m/data=!3m1!1e3!4m5!3m4!1s0x0:0xa925950bd73c9971!8m2!3d45.514489!4d-73.573689)

  // // OTHER QUERIES
  // arbresModel.countDocuments({ ARROND: 5 }).then((result) => { console.log("Total results in Plateau: " + result); });
  // arbresModel.find({ Longitude: { $gte: -73.573689 }, Rue: "Boulevard Saint-Laurent" }).sort({ Longitude: 1 }).limit(1).then((result) => { console.log(result); });
  // arbresModel.find({ ARROND: "5" }).then((result) => { console.log(result); });
  // arbresModel.find({ Longitude: { $gte: -73.5736889 } }).then((result) => { console.log(result); });
  // arbresModel.find({ No_civique: "3653" }).then((result) => { console.log(result); });
  // arbresModel.find({ Longitude: { $gte: "-73°34'26" } }).then((result) => { console.log("date: " + result); });
  // query.sort({ country: -1 });

  // // DISTINCT QUERIES
  // // Query all distinct values of ESSENCE_ANG (tree essence in english) in dataset
  // arbresModel.distinct('ESSENCE_ANG').then((result) => { console.log(result); });
  // // Query all distinct values of ESSENCE_ANG and write to CSV file
  // arbresModel.distinct('ESSENCE_ANG', function (err, ESSENCE_ANG) { fs.writeFileSync('./db_files/essences.csv', JSON.stringify(ESSENCE_ANG)); });
  // // Query all distinct values of SIGLE (essence abbreviation) in dataset and write to CSV file
  // arbresModel.distinct('SIGLE').then((result) => {
  //   console.log(result);
  //   fs.writeFileSync('./db_files/sigle.csv', JSON.stringify(result));
  // });
  // // Query all distinct values of ARROND_NOM (neighbourhoods) in dataset and write to CSV file
  // arbresModel.distinct('ARROND_NOM').then((result) => {
  //   console.log(result);
  //   fs.writeFileSync('./db_files/arrond_nom.csv', JSON.stringify(result));
  // });
  // // alternative to above
  // arbresModel.distinct('ARROND_NOM', function (err, ARROND_NOM) { fs.writeFileSync('./db_files/arrond_nom.csv', JSON.stringify(ARROND_NOM)); });

  // // FAILED QUERIES (proximity query and Geospatial)
  // // arbresModel.countDocuments({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, DHP: "28" }).then((result) => { console.log("Total results in immediate vicinity of 3655 blvd St Laurent: " + result); });
  // arbresModel.countDocuments({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, Rue: "Boulevard Saint-Laurent" }).then((result) => { console.log("Total results in immediate vicinity of 3655 blvd St Laurent: " + result); });
  // // arbresModel.find({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, Rue: "Boulevard Saint-Laurent" }, 'No_civique').then((result) => { console.log(result); });
  // arbresModel.findOne({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, Rue: "Boulevard Saint-Laurent" }).then((result) => { console.log(result); });
  // arbresModel.findOne({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 }, Rue: "Boulevard Saint-Laurent" }).then((result) => { console.log(result); });
  // arbresModel.aggregate([
  //   {
  //     $project: {
  //       diff: {
  //         $abs: {
  //           $subtract: [
  //             -73.575026,
  //             "$Longitude"
  //           ]
  //         }
  //       },
  //       doc: "$$ROOT"
  //     }
  //   },
  //   { $sort: { diff: 1 } },
  //   { $limit: 1 },
  //   {
  //     $project: {
  //       _id: 0,
  //       ARROND: "$doc.ARROND"
  //     }
  //   }
  // ], { explain: true })
  // .then((result) => { console.log(result); });
  // arbresModel.aggregate( [ 
  //   $project { 
  //     Longitude: { 
  //       $abs: { $subtract: ["$Longitude",,  -73.575026] } } }).sort({ Longitude: -1 }).limit(1).then((result) => { console.log(result); });

  // }).then((result) => { console.log(result); });

  // // Failed attempts at using Geospatial query
  // arbresModel.collection.updateMany({}, [
  //   {
  //     $set:
  //     {
  //       loc: ["$latitude", "$longitude"]
  //     }
  //   }
  // ]);
  //   db.quartModel.updateMany({}, [
  //     {
  //       $addFields:
  //       {
  //         loc: 0
  //       }
  //     }
  //   ])
  //   let fieldAddition = await arbresModel.aggregate([
  //     {
  //       $addFields:
  //       {
  //         loc: ["$latitude", "$longitude"]
  //       }
  //     }
  //   ])
  //   console.log(fieldAddition);
  // })


  /* DATASET mtlQuartiers */
  // // BASIC QUERIES
  // // Query total documents in dataset
  // quartModel.countDocuments().then((result) => { console.log("Total documents in database: " + result); });
  // // Query number of distinct 'quartier' fields
  // quartModel.distinct('Q_sociologique').exec(function (err, quartiers) {
  //   console.log('Total quartiers: ', quartiers.length);
  // });
  // // Query number of distinct 'arrondissement' fields
  // // v1:: using distinct & count --> NO (deprecated)
  // quartModel.distinct('Arrondissement').count().exec(function (err, arrondissement) {
  //   console.log("Total arrondissements (v1): " + arrondissement);
  // });
  // // v2:: using find & distinct --> OK BUT overkill
  // quartModel.find().distinct('Arrondissement').exec(function (err, arrondissement) {
  //   console.log('Total arrondissements (v2): ', arrondissement.length);
  // });
  // // v3:: using distinct
  // quartModel.distinct('Arrondissement').exec(function (err, arrondissement) {
  //   console.log('Total arrondissements: ', arrondissement.length);
  //   // // array for demonstration purposes
  //   // console.log('Arrondissements: ', arrondissement);
  // });

  // // FAILED QUERIES (arrondissement x abbreviation)
  // quartModel.distinct('Arrondissement').exec(function (err, distinct_arrondissement) {
  //   // console.log('Arrondissements: ', distinct_arrondissement);
  //   // // Attempt at stringifying --> OK BUT not nec
  //   // let arrondString = arrondissement.toString();
  //   // console.log(arrondString);
  //   // Oh dear lord this is superfluous...
  //   quartModel.find().where('Arrondissement').in(distinct_arrondissement).exec(function (err, arrondissementAndAbbrev) {
  //     console.log(arrondissementAndAbbrev);
  //   })
  //   // quartModel.find({ Arrondissement: { arrondString } }).then((result) => { console.log(result); });
  // });

  //   quartModel.distinct('Abreviation').exec(function (err, abbreviation) {
  //     console.log('Abbreviations: ', abbreviation);
  //   });


  /* DATASET: mtlAbattages */
  // // Query number of documents in dataset (i.e. total number of trees in mtlAbattages dataset)
  // abattModel.countDocuments().then((result) => { console.log("Total abattages: " + result); });
  // // Query number of documents for which the Longitude and Latitude fields are within a range of values (i.e. number of abattages in a perimeter)
  // abattModel.countDocuments({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 } }).then((result) => { console.log("Total results in vicinity of 3655 blvd St Laurent: " + result); });
  // // Query documents for which the Longitude and Latitude fields are within a range of values (i.e. trees in a perimeter) and return culled info
  // abattModel.find({ Longitude: { $gt: -73.575026, $lt: -73.572187 }, Latitude: { $lt: 45.515056, $gt: 45.514371 } }, 'ARH_DATE_ABATTAGE Longitude Latitude').then((result) => { console.log(result); });
  // // Use resulting info for Maps search

  // // FAILED QUERIES (date)
  //   let aggTest = await abattModel.aggregate([{
  //     $project: {
  //       date: {
  //         $dateFromString: {
  //           dateString: '$ARH_DATE_ABATTAGE',
  //         }
  //       }
  //     }
  //   }]).find({ ARH_DATE_ABATTAGE: { $gt: "2001-07-25" } }).then((result) => { console.log("date: " + result); })
  //   // abattModel.find({ ARH_DATE_ABATTAGE: "2006-04-24" }).then((result) => { console.log("date: " + result); })
  // })

  // QUERY TO FIND TREE
  // arbresModel
  //   .find(
  //     {
  //       Longitude: { $gt: -73.5772, $lt: -73.5769 },
  //       Latitude: { $gt: 45.5460, $lt: 45.5463 },
  //       Rue: "2e Avenue"
  //     },
  //     'No_civique ESSENCE_ANG Longitude Latitude')
  //   .then((result) => {
  //     console.log(result);
  //     console.log(result.length);
  //   });

  // arbresModel
  //   .find(
  //     {
  //       Longitude: -73.577033,
  //       Latitude: 45.546152
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   });

  abattModel.find({ ARH_EMP_NO: 86842 }).then((result) => {
    console.log(result);
  });
})

// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));
app.use("/client", clientRoute);
//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}

// user query
async function handleGetVars(request, response, next) {
  console.log(request.url);
  console.log(request.query.paramArrondNom);
  let results = await arbresModel.find({ ARROND_NOM: request.query.paramArrondNom }, 'Rue COTE No_civique ESSENCE_ANG Date_plantation Longitude Latitude').limit(10).sort({ Date_plantation: -1 });
  console.log(results);
  response.send(results);
}