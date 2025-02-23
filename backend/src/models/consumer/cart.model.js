import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: "consumer", required: true },
    items: [
        {
            variant: { type: Schema.Types.ObjectId, ref: "variant", required: true }, // Refers to color variant
            size: { type: Schema.Types.ObjectId, ref: "size", required: true },       // Refers to specific size
            quantity: { type: Number, default: 1 }
        }
    ]
}, { timestamps: true });

export default model("Cart", cartSchema);
