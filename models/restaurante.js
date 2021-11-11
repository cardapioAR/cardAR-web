const mongoose = require('mongoose')

const restaurateSchema = new mongoose.Schema({
    nomeRestaurante: {
        type: String,
        required: true
    },
    enderecoRestaurante: {
        type: String,
        required: true
    },
    tituloPrato1: {
        type: String,
        required: true
    },
    descricaoPrato1: {
        type: String,
        required: true
    },
    tituloPrato2: {
        type: String
    },
    descricaoPrato2: {
        type: String
    },
    tituloPrato3: {
        type: String
    },
    descricaoPrato3: {
        type: String
    }
})

module.exports = mongoose.model('Restaurante', restaurateSchema)