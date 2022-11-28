import express from "express";
import filmes from "./filmesRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Filmes lançamentos"})
    })
    app.use(
        express.json(),
        filmes
    )
}

export default routes