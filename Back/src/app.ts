import express from "express";
import db from "./config/dbConnect";
import routes from "./routes"

db.on("erro", console.log.bind(console, "Erro de conexão"))
db.once("open", () =>{
    console.log("Conexão com o banco de dados realiza com sucesso!")
})

const app = express();
app.use(express.json());
routes(app)

export default app

