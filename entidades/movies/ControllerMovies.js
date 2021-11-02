const express = require('express');
const Pelicula = require('./ModuleMovies.js')

const crearPelicula = async (req, res) => {
    const pelicula = new Pelicula(req.body); 
    try{
        console.log(pelicula);
        await pelicula.save()
        res.json(pelicula)
    }catch(error){
        console.error(error);
    }
}


/**
 * busqueda todas peliculas
 * busqueda por id
 * modificar 
 * borrar
 */

module.exports = {
    crearPelicula
};