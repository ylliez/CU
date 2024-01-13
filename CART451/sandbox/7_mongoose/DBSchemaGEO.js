const mongoose = require('mongoose');
const GEOSchema = new mongoose.Schema(
    {
        country: String,
        area: Number,
        population: String,
        pop_per_km_sq: Number
    });
const GEO = mongoose.model("GEOENTRY", GEOSchema, "WorldPop");
module.exports = GEO;
