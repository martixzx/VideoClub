const router = require('express').Router();
const controller = require('./ControllerMovies')

router.post('/', controller.crearPelicula);
router.delete('/:id', controller.eliminarPelicula);
router.get('/', controller.listaPeliculas)

module.exports = router;