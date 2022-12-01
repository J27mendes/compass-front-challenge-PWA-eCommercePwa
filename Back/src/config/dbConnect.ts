import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://MendezDevJ27:.12.12.@cluster0.y38bzja.mongodb.net/pwa-ecommerce")

let db = mongoose.connection;

export default db