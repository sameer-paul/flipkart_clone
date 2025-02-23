import { Schema,model } from "mongoose";

// Variant Schema
const variantSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: "product", required: true, index: true },
    storeId: { type: Schema.Types.ObjectId, ref: "store", required: true, index: true },
    sellerId: { type: Schema.Types.ObjectId, ref: "seller", required: true, index: true },
    variantDetails: { type: Map, of: Schema.Types.Mixed, required: true } // Changed name from attributes to avoid conflict
}, { timestamps: true });

export default model("variant", variantSchema);