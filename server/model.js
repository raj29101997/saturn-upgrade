import { propertySchema } from "./schema.js";
import mongoose from "mongoose";

export const Property = mongoose.model('Property', propertySchema);
