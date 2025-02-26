import productModel from "../../models/seller/product.model.js";
import variantModel from "../../models/seller/variant.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import checkMissingField from "../../utils/isComplete.utility.js"
import apiError from "../../utils/apiError.js"

const productListing = asyncHandler(async(req,res) => {
    const { _id } = req.userDetail;
    const productVariantData = req.body;

    // Extract product data & set sellerId
    const productData = productVariantData.map(({product})=> ({
            ...product,
            sellerId:_id,
    }))

    // Insert all products in bulk
    const createdProducts = await productModel.insertMany(productData);


    // Map productId to variants before inserting
    const variantData = productVariantData.flatMap(({variant},index) => {
        const productId = createdProducts[index]._id

        return variant.map((v) => ({
            ...v,
            productId,
            storeId : createdProducts[index].storeId,
            sellerId : _id
        }))
    })
    

    // Insert all variants in one go
    const createdVariants = await variantModel.insertMany(variantData)

    // Create bulk update operations
    const bulkUpdateOps = createdProducts.map(product => {
    const variantIds = createdVariants
        .filter(v => v.productId.toString() === product._id.toString()) // Ensure correct matching
        .map(v => v._id); // Extract variant _ids

    return {
        updateOne: {
            filter: { _id: product._id }, // Find the product document
            update: { $set: { variants: variantIds } } // Update its variants field
        }
    };
});

// Execute bulk update in a single database call, only if there are updates
if (bulkUpdateOps.length > 0) {
    await productModel.bulkWrite(bulkUpdateOps);
}

res.status(201).json({ message: "All products listed successfully", products: createdProducts });

})

export default productListing