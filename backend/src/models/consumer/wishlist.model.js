import { Schema } from 'mongoose';

const wishlistSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: "consumer", required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'product', required: true },
},{timestamps: true});

export default wishlistSchema;
