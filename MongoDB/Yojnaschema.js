
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    PhNumber: { type: String, required: true },
    Name: { type: String },
    Location: { type: String },

});

const YojnaSchema = mongoose.model('Yojna', postSchema);

export default YojnaSchema;
