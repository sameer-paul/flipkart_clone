import {Schema,model} from "mongoose"


// Store Schema
const storeSchema = new Schema({
    sellerId: { type: Schema.Types.ObjectId, ref: "seller", required: true, index: true },
    storeCategory: { type: String, required: true, index: true }
}, { timestamps: true });

storeSchema.index({ sellerId: 1, storeCategory: 1 }, { unique: true });


export default model("store",storeSchema)