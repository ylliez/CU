const mongoose = require('mongoose');
const EEGSchema = new mongoose.Schema(
    {
        Fp1: String,
        AF3: String,
        F3: String,
        F7: String,
        FC5: String,
        FC1: String,
        C3: String,
        T7: String,
        CP5: String,
        CP1: String,
        P3: String,
        P7: String,
        PO3: String,
        O1: String,
        Oz: String,
        Pz: String,
        Fp2: String,
        AF4: String,
        Fz: String,
        F4: String,
        F8: String,
        FC6: String,
        FC2: String,
        Cz: String,
        C4: String,
        T8: String,
        CP6: String,
        CP2: String,
        P4: String,
        P8: String,
        PO4: String,
        O2: String
    });
const EEG = mongoose.model("EEGENTRY", EEGSchema, "EEG");
module.exports = EEG;
