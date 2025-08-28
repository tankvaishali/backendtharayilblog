import express from 'express'
import YojnaSchema from '../MongoDB/Yojnaschema.js';

const GetYojana = express.Router()

GetYojana.get('/', async (req, res) => {
    try {
        const posts = await YojnaSchema.find();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

export default GetYojana