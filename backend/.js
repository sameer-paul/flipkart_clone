import { Schema, model } from "mongoose";

// Category Schema (Supports hierarchical structure)
const categorySchema = new Schema({
    name: { type: String, required: true, trim: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: "category", default: null }, // Links to parent
    sellerId: { type: Schema.Types.ObjectId, ref: "seller", required: true }, // Links to seller
    storeId: { type: Schema.Types.ObjectId, ref: "store", required: true }, // Links to store
    storeCategory: { // Ensures categories belong to correct stores
        type: String,
        required: true,
        enum: ["Clothing", "Electronics", "Appliances", "Footwear", "Mobile"]
    },
    filters: { type: Map, of: [String] }, // Flexible filters (size, color, etc.)
}, { timestamps: true });

export const Category = model("category", categorySchema);

// Product Schema
const productSchema = new Schema({
    storeId: { type: Schema.Types.ObjectId, ref: "store", required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "category", required: true }, // Links to category
    sellerId: { type: Schema.Types.ObjectId, ref: "seller", required: true }, // Links to seller
    brand: { type: String, required: true, trim: true, lowercase: true },
    attributes: { type: Map, of: String }, // Dynamic attributes (e.g., { size: "M", color: "Blue" })
}, { timestamps: true });

export const Product = model("product", productSchema);

// Seller Schema
const sellerSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    stores: [{ type: Schema.Types.ObjectId, ref: "store" }] // A seller can have multiple stores
}, { timestamps: true });

export const Seller = model("seller", sellerSchema);

// Store Schema
const storeSchema = new Schema({
    name: { type: String, required: true, trim: true },
    sellerId: { type: Schema.Types.ObjectId, ref: "seller", required: true, unique: true }, // One store per seller per category
    category: { type: String, required: true, enum: ["Clothing", "Electronics", "Appliances", "Footwear", "Mobile"] },
}, { timestamps: true });

export const Store = model("store", storeSchema);






















// schemas


/*
// seller model
    {
        "email":"sameerpaul58@gmail.com",
        "contact":"6206382019",
        "refreshToken":"",
        "storeName": "SP Sports Wear"
    }

// store model
    {
        "sellerId":"",
        "storeCategory":"clothing"
    }

//  product model
    {
        "storeId":"",
        "sellerId":"",
        "productDetails":{
            "gender":"men",
            "type":"tshirt",
            "brand":"SP SportsWear",
            "price":"430",
            "fabric":"nylon blend",
            "pattern":"solid",
            "sleeveType":"half sleeve",
            "neckType":"round collar",
            "variant":[]
        }
        
    }

//  variant model
    {
        "productId":"",
        "storeId":"",
        "sellerId":"",
        "variantDetails":{

        }
    }
    
*/















/*


{
    product : {
    "storeId":"",
    "sellerId":"",
    "productDetails":{
        "gender":"men",
        "type":"tshirt",
        "brand":"SP SportsWear",
        "price":"430",
        "fabric":"nylon blend",
        "pattern":"solid",
        "sleeveType":"half sleeve",
        "neckType":"round collar",
        "variant":[]
    }
    
    },


    variant : {
    "productId":"",
    "storeId":"",
    "sellerId":"",
    "variantDetails":{
        
    }
    }
}


*/









// {
//     "product" : {
//         "storeId":"",
//         "sellerId":"",
//         "productDetails":{
//             "gender":"men",
//             "type":"tshirt",
//             "brand":"SP SportsWear",
//             "price":"430",
//             "fabric":"nylon blend",
//             "pattern":"solid",
//             "sleeveType":"half sleeve",
//             "neckType":"round collar",
//             "description":"",
//             "title":"",
//             "variant":[]
//         }
//     },
//     "variant" : {
//         "productId":"",
//         "storeId":"",
//         "sellerId":"",
//         "variantDetails":{
//         }
//     }
// }




















// deepcopy


// const deepClone = (obj) => {
//     const type = typeof  obj;
//     if(type!=='object' || !obj) return obj;
//     return Object.fromEntries(Object.entries(obj).map(([key,value]) =>[key,deepClone(value)])); 
// }