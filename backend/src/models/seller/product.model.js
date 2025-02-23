import { Schema,model } from "mongoose";

// Product Schema
const productSchema = new Schema({
    storeId: { type: Schema.Types.ObjectId, ref: "store", required: true, index: true },
    sellerId: { type: Schema.Types.ObjectId, ref: "seller", required: true, index: true },
    productDetails: { type: Map, of: Schema.Types.Mixed, required: true }, // Ensuring product details are always provided
    variants: [{ type: Schema.Types.ObjectId, ref: "variant" }]
}, { timestamps: true });

export const Product = model("product", productSchema);





