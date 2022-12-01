import express from "express";
import products from "./productsRoutes";

const routes = (app:any) => {
    app.route('/').get((req:any, res:any) => {
        res.status(200).send({titulo: "Products lançamentos"})
    })
    app.use(
        express.json(),
        products
    )
}

export default routes