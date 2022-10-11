const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
    {
        INV_TYPE: String,
        EMP_NO: Number,
        ARROND: Number,
        ARROND_NOM: String,
        Rue: String,
        COTE: String,
        No_civique: String,
        Emplacement: String,
        Coord_X: Number,
        Coord_Y: Number,
        SIGLE: String,
        Essence_latin: String,
        Essence_fr: String,
        ESSENCE_ANG: String,
        DHP: Number,
        Date_releve: String,
        Date_plantation: String,
        LOCALISATION: String,
        CODE_PARC: String,
        NOM_PARC: String,
        Longitude: Number,
        Latitude: Number
    });
const Entry = mongoose.model("DBENTRY", Schema, "mtlArbres");
module.exports = Entry;
