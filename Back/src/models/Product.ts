import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        arrivalsInfo: {type: String, required: true},
        arrivalsName: {type: String, required: true},
        arrivalsPrice: {type: Number, required: true},
        img: {type: String}
    }
)

const products = mongoose.model("products", productSchema)

export default products;