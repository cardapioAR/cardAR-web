const express = require('express')
const Restaurante = require('./../models/restaurante')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('./index')
})

router.post('/', async (req, res) => {
    var restaurante = new Restaurante({
        nomeRestaurante: req.body.nomeRestaurante,
        enderecoRestaurante: req.body.enderecoRestaurante,
        tituloPrato1: req.body.tituloPrato1,
        descricaoPrato1: req.body.descricaoPrato1,
        tituloPrato2: req.body.tituloPrato2,
        descricaoPrato2: req.body.descricaoPrato2,
        tituloPrato3: req.body.tituloPrato3,
        descricaoPrato3: req.body.descricaoPrato3
    })
    try {
        restaurante = await restaurante.save()
        res.redirect('/')
    } catch (e) {
        console.log(e)
    }
})

module.exports = router