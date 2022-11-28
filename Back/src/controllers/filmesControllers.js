import filmes from "../models/Filme.js";

class FilmeController {

    static listarFilmes = (req, res) => {
        filmes.find((err, filmes) => {
            res.status(200).json(filmes)
        })   
    }
    static listarFilmePorId = (req, res) => {
        const id = req.params.id;

        filmes.findById(id, (err, filmes) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
            } else {
                res.status(200).send(filmes);
            }
        })
    }
    static cadastrarFilme = (req, res) => {
        let filme = new filmes(req.body);

        filme.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar o filme.`})
            } else {
                res.status(201).send(filme.toJSON())
            }
        })
    }
    static atualizarFilme = (req, res) => {
        const id = req.params.id

        filmes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static excluirFilme = (req, res) => {
        const id = req.params.id;
        
        filmes.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Filme removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default FilmeController