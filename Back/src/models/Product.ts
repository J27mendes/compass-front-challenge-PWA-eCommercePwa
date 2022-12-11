import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        categories:{type: Number, required: true},
        arrivalsInfo: {type: String, required: true},
        arrivalsName: {type: String, required: true},
        arrivalsPrice: {type: Number, required: true},
        img: {
            data: Buffer,
            contentType: String
        }
    }
)

const products = mongoose.model("products", productSchema)

export default products;