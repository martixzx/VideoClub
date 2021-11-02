const router = require('express').Router();
const controller = require('./ControllerMovies')

router.post('/', controller.crearPelicula);

module.exports = router;