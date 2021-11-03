const express = require('express');
const { findOne } = require('./ModuleMovies.js');
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

const listaPeliculas = async (req, res) => {
    // como enseño mi objeto
    if (req.query.titulo) {
        const pelicula = await Pelicula.find({titulo: req.query.titulo}) 
        console.log(pelicula)
        res.json(pelicula)
    }
   else {
        res.json(await Pelicula.find())
    }
}



const eliminarPelicula = async (req, res) => {
    //borrar películas
        
        const pelicula = req.params.id;
        const movie = await Pelicula.findById(pelicula);
        await Pelicula.deleteOne(movie);
        res.json('Eliminado');
    }
    


/**
 * ¿que le estoy pidiendo al servidor que me devuelva?
 * query
 * perams
 * 
 * ¿que le estoy enviadon al servidor que me devuelva
 * body
 * header
 * 
 * busqueda todas peliculas
 * busqueda por id
 * modificar 
 * borrar
 */

module.exports = {
    crearPelicula, 
    eliminarPelicula,
    listaPeliculas
};