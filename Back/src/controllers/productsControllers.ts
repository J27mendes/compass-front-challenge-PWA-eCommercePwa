import products from "../models/Product";

class ProductController {

    static listProducts = (req:any, res:any)=> {
        products.find((err:any, products:any) => {
            res.status(200).json(products)
        })   
    }
    static listProductPorId = (req:any, res:any) => {
        const id = req.params.id;

        products.findById(id, (err:any, products:any) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do produto não localizado.`})
            } else {
                res.status(200).send(products);
            }
        })
    }
    static registerProduct = (req:any, res:any) =>{ 
        let product = new products(req.body);
        

        product.save((err:any) => {
            if(err){
                res.status(500).send({message: `${err.message} falha ao registrar o produto.`})
            } else {
                res.status(201).send(product.toJSON())
            }
        })
    }
    static updateProduct = (req:any, res:any) => {
        const id = req.params.id

        products.findByIdAndUpdate(id, {$set: req.body}, (err:any) => {
            if(!err){
                res.status(200).send({message: 'Produto atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static deleteProduct = (req:any, res:any) => {
        const id = req.params.id;
        
        products.findByIdAndDelete(id, (err:any) => {
            if(!err){
                res.status(200).send({message: 'produto removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default ProductController