import { Schema,model } from "mongoose";

const ratingSchema = new Schema({
    productId:{
        type:Schema.Types.ObjectId,
        ref:"product",
        required: true
    },
    rating: {
        type: String,
        required: true
    }
})

export default model("rating",ratingSchema)