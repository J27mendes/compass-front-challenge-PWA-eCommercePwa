import express from "express";
import FilmeController from "../controllers/filmesControllers.js";

const router = express.Router();

router
    .get("/filmes", FilmeController.listarFilmes)
    .get("/filmes/:id", FilmeController.listarFilmePorId)
    .post("/filmes", FilmeController.cadastrarFilme)
    .put("/filmes/:id", FilmeController.atualizarFilme)
    .delete("/filmes/:id", FilmeController.excluirFilme)

export default router;