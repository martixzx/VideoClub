const mongoose = require('mongoose');

const PeliculaEsquema = mongoose.Schema({
    
    titulo: {
        type: String
    },
    director: {
        type: String
    },
    año: {
        type: Number
    },
    actor: {
        type: String
    },

})

module.exports = mongoose.model("Peliculas", PeliculaEsquema)