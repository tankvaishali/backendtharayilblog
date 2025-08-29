import express from 'express'
import schemeyojana from '../MongoDB/Schemeyojanaschema.js';

const Getschemeyojana = express.Router()

Getschemeyojana.get('/', async (req, res) => {
    try {
        const posts = await schemeyojana.find();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

export default Getschemeyojana