import { Property } from "../model.js";
import express from 'express'
let router = express.Router()

router.route('/transactions').post(async (req, res) => {
    try {
        const {
            houseName, description, price, plotSize, area, totalUnits, projectType, status, amenitiesQuantity, amenities} = req.body;

        const newProperty = new Property({
            houseName,
            description,
            price,
            plotSize,
            area,
            totalUnits,
            projectType,
            status,
            amenitiesQuantity,
            amenities
        });

        let storeData = await newProperty.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

export default router