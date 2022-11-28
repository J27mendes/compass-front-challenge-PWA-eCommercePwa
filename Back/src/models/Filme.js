import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        ator: {type: String, required: true},
        diretor: {type: String, required: true},
        ano: {type: Number}
    }
)

const  filmes = mongoose.model("filmes", filmeSchema)

export default filmes;