const usuarios = require('./routes/usuarios');
const cursos = require('./routes/cursos');
const auth = require('./routes/auth');
const express = require('express');
const CONFIG = require('./config/index');
const DB = require('./config/connection');
const config = new CONFIG();
const db = new DB(config.mongo())
const version = config.service().version;
const port = config.service().port 


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(`/${version}/api/usuarios`, usuarios);
app.use(`/${version}/api/cursos`, cursos);
app.use(`/${version}/api/auth`, auth);

app.listen(port, () => {
    console.log(`Api RESTFul Ok, y ejecutándose en el puerto: ${port}`);
})