import express from "express";
import ProductController from "../controllers/productsControllers";

const router = express.Router();

router
    .get("/products", ProductController.listProducts)
    .get("/products/:id", ProductController.listProductPorId)
    .post("/products", ProductController.registerProduct)
    .put("/products/:id", ProductController.updateProduct)
    .delete("/products/:id", ProductController.deleteProduct)

export default router;