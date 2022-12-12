import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        categories:{type: Number},
        arrivalsInfo: {type: String},
        arrivalsName: {type: String},
        arrivalsPrice: {type: Number},
        img: {
            data: Buffer,
            contentType: String
        }
    }
)

const products = mongoose.model("products", productSchema)

export default products;