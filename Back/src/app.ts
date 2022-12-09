import express from "express";
import db from "./config/dbConnect";
import routes from "./routes"
import cors from 'cors'

db.on("erro", console.log.bind(console, "Erro de conexão"))
db.once("open", () =>{
    console.log("Conexão com o banco de dados realizada com sucesso!")
})

const app = express();
app.use(express.json());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    app.use(cors());
    next();    
});
routes(app);

export default app

