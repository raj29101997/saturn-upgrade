import express from 'express'
import { Property } from '../model.js';
let router = express.Router()

router.route('/getData').get(async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

export default router