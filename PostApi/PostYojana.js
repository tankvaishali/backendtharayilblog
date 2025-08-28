import express from 'express';
import YojnaSchema from '../MongoDB/Yojnaschema.js';

const PostYojana = express.Router()

PostYojana.post('/', async (req, res) => {
    try {
        const { PhNumber,
            Name, Location } = req.body;
        const newPost = new YojnaSchema({
            PhNumber,
            Name, Location
        });

        await newPost.save(); // Save to MongoDB
        res.status(201).json({ message: 'Data added successfully', newPost });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

export default PostYojana;  