const express = require("express");
const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/varsToMongo', handleGetVars);
//1A
//https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/
require("dotenv").config();
//2A
//import mongoose
const mongoose = require("mongoose");
/** 1B for the mongo connection */
const url = process.env.MONGODB_URI;
console.log(url);
// connect to generated mongoose model*
// const EEGModel = require("./DBSchemaEEG.js");
const GEOModel = require("./DBSchemaGEO.js");

//2B: connect to db
mongoose.connect(url);
let db = mongoose.connection;
//2C
db.once("open", async function () {
  console.log("is connected");
  // EEGModel.find({ Fp1: "0.05781309262236256" }).then((result) => {
  // EEGModel.find({ Fp1: "1.367407744009859" }).then((result) => {
  // EEGModel.findOne({ Fp1: "0.05781309262236256" }).then((result) => {
  // GEOModel.find({ country: "Malta" }).then((result) => {
  //   console.log(result);
  // })

  // GEOModel.find({ country: "Malta" }).then((result) => { // using find --> can be many results
  // GEOModel.find({ area: 1861 }).then((result) => {
  // GEOModel.find({ country: "Malta", area: 320 }).then((result) => { // multi-condition (≈ AND statement)
  // GEOModel.find({ country: "Malta", area: 321 }).then((result) => { // no results!
  // GEOModel.find({ area: { $gte: 9000000 } }).then((result) => { // relative conditions
  // GEOModel.find({ area: { $gte: 1000000 }, pop_per_km_sq: { $gte: 50 } }).then((result) => { // relative conditions
  // GEOModel.findOne({ area: { $gte: 1000000 }, pop_per_km_sq: { $gte: 50 } }).then((result) => { // single entry, first one
  // GEOModel.findOne({ area: { $gte: 1000000 }, pop_per_km_sq: { $gte: 50 } }, 'country population').then((result) => { // spec output fields
  // GEOModel.find().where('country').in(['Malta', 'France']).then((result) => {
  //   console.log(result);
  // })

  // let altQuery = await GEOModel.find().where('country').in(['Malta', 'France']);
  // console.log(altQuery);

  // let resCount = await GEOModel.countDocuments(); // built-in function providing entry count
  // let resCount = await GEOModel.countDocuments({ area: { $gte: 1000000 } }); // specify count condition
  // console.log(resCount);

  // const query = GEOModel.find({ area: { $gte: 0 } });
  // query.sort({ country: -1 });
  // query.exec((err, CountriesAlphabetical) => {
  //   if (err) return handleError(err);
  //   //contains an ordered list
  //   console.log(CountriesAlphabetical);
  // });
})

//   //****** number 6 is a strategy for building your query - saving it to a variable
// // and then executing it at a later time ... . we are always building up on the same query */

// //6A
// // find all entries whose neighbourhood_group is Brooklyn
// // const query = AirBNB.find({ neighbourhood_group: "Brooklyn" });
// //6B // sort by host_name
// // query.sort({host_name:-1});
// //6C// selecting only cetrain fields
// // query.select("host_name review_rate_number house_rules ");
// //6D// limit our results to 5 items
// // query.limit(50);
// // 6E// execute the query (could be called at any time ... )
// // query.exec((err, airbnbEntries) => {
// //   if (err) return handleError(err);
// //   //contains an ordered list
// //   console.log(airbnbEntries);
// // });

// // 7 grouping//aggregate
// //mpre complx https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/
// let t = await AirBNB.aggregate([{
//   $group: {
//     _id: '$host_name',
//     count: { $sum: 1 } // this means that the count will increment by 1
//   }
// }])
// console.log(t)
// //or.. this one does the same thing ...  
// const data = await AirBNB.aggregate().sortByCount("host_name");
// console.log(data);
// }); //connect
// ///2E
// //bind to error event
// //Bind connection to error event (to get notification of connection errors)
// db.on(
//   "error",
//   console.error.bind(console, "MongoDB connection error:")
// );

// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public")); // make public folder servable
app.use("/client", clientRoute); // route client
//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}

/// use this VERB for getting posted data... 9
app.post('/postForm', handlePost);

// the callback
function handlePost(request, response) {
  console.log(request.body);
  // console.log(request.body.country);
  //A:: create new data object 
  const entry = new GEOModel({
    country: request.body.country,
    area: request.body.area,
    population: request.body.population,
    pop_per_km_sq: request.body.pop_per_km_sq
  });
  //save to db
  entry.save().then((result) => {
    response.json(result);
    console.log(result);
  });
  // response.send(result);
}

//EXAMPLE of  user making a query ... 10
async function handleGetVars(request, response, next) {
  console.log(request.url);
  console.log(request.query.paramOne); // from client
  // let results = await EEGModel.find({ Fp1: request.query.paramOne });
  let results = await GEOModel.find({ country: request.query.paramOne }, 'population');
  console.log(results[0]);
  response.send(results[0].population); // can only send one response!
}