const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
    {
        ARH_TYPE: String,
        ARH_EMP_NO: Number,
        ARH_NO: Number,
        ARH_ESSENCE: String,
        ARH_DATE_ABATTAGE: String,
        Coord_X: Number,
        Coord_Y: Number,
        Longitude: Number,
        Latitude: Number
    });
const mtlAbattages = mongoose.model("ABATTENTRY", Schema, "mtlAbattages");
module.exports = mtlAbattages;
