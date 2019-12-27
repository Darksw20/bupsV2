'use strict';
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const routes = require('./Routes');
var logger = require("morgan");
const app = express();

// Middlewares:
app.use(logger('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes: ---------------------------------------------------

routes(app);

// ERROR 404 Handling
app.use(function(req, res, next) {
    res.status(404).send('No se encontró el contenido solicitado');
});
  
// ERROR 500 Handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Starting the server
var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("App running in Port "+port)
});
