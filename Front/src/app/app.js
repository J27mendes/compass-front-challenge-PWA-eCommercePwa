import { Express } from "express";

const app = Express();

const handbags = [
    {id: 1, "title": "Coach"},
    {id: 2, "title": "Black Bag"},
    {id: 3, "title": "Pink Bag"},
]

app.get('/', (req, res) => {
    res.status(200).send('Handbags')
})

app.get('/cart', (req, res) => {
    res.status(200).json(handbags)
})