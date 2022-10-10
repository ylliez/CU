const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.MONGODB_URI;
const formModel = require("./DBSchemaForm.js");
mongoose.connect(dbURI);
let db = mongoose.connection;

db.once("open", async function () {
    console.log("db connected");
    formModel.deleteMany({}).then((result) => { console.dir('deleted ' + result.deletedCount + ' entries') });
})