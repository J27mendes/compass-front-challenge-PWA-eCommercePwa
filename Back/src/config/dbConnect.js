import mongoose from "mongoose";

mongoose.connect("mongodb+srv://PunkJ27:hard8Core*@cluster0.uxc1gtt.mongodb.net/Api-Rest-MongoDB")

let db = mongoose.connection;

export default db