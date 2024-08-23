import mongoose from "mongoose";

export const propertySchema = new mongoose.Schema({
    houseName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    plotSize: { type: String, required: true },
    area: { type: String, required: true },
    totalUnits: { type: Number, required: true },
    projectType: { type: String, required: true },
    status: { type: String, required: true }, 
    amenitiesQuantity: { type: String, required: true }, 
    amenities: { type: [String], required: true } 
});