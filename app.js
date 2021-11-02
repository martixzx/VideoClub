require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const peliculasRouter = require('./entidades/movies/RouterMovies.js') 


mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('conectado a la base exitosamente'))
.catch(e => console.error('no estoy conectado', e));

const app = express();

app.use(express.json());

app.use('/peliculas', peliculasRouter)

app.listen(process.env.PORT, () => console.log("aqui esta nuestro blacknetflix",process.env.PORT));




