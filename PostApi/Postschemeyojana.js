import express from 'express';
import YojnaSchema from '../MongoDB/Yojnaschema.js';
import schemeyojana from '../MongoDB/Schemeyojanaschema.js';

const Postschemeyojana = express.Router()

Postschemeyojana.post('/', async (req, res) => {
    try {
        const { schemephnumber,
            schemename, schemelocation } = req.body;
        const newPost = new schemeyojana({
            schemephnumber,
            schemename, schemelocation
        });

        await newPost.save(); // Save to MongoDB
        res.status(201).json({ message: 'Data added successfully', newPost });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

export default Postschemeyojana;  