const mongoose = require('mongoose');
const formSchema = new mongoose.Schema(
    {
        ID: String,
        Name: String,
        Age: Number,
        Gender: String,
        Nationality: String,
        Telephone: String,
        Address: String,
        Cohabitants: String,
        Professional: String,
        Marital: String,
        Belief: String,
        Photo: Object
    });
const FORM = mongoose.model("FORMENTRY", formSchema, "projectTest");
module.exports = FORM;