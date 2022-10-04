const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
    {
        id: Number,
        Q_sociologique: String,
        Arrondissement: String,
        Abreviation: String,
        nbr_RUI: Number,
        Table: String
    });
const mtlQuartiers = mongoose.model("QUARTENTRY", Schema, "mtlQuartiers");
module.exports = mtlQuartiers;
