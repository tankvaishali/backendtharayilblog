
import mongoose from 'mongoose';

const schemeyojanaschema = new mongoose.Schema({
   schemephnumber: { type: String, required: true },
    schemename: { type: String },
    schemelocation: { type: String },

});

const schemeyojana = mongoose.model('schemeYojna', schemeyojanaschema);

export default schemeyojana;
