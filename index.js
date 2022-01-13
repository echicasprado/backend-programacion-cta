const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
require('dotenv/config');
const servidor = express();
const PORT = process.env.PORT || 3000;
const Estudiante = require('./models/estudiante');
const Router = require('./routers/router');


servidor.use(cors());
servidor.use(bodyparser.urlencoded({extended:true}));
servidor.use(bodyparser.json());

mongoose.connect(process.env.DB_CONNETION,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Conectado a la base de datos");
});

servidor.use(Router);

servidor.listen(PORT,function(){
    console.log(`Servidor activo ${PORT}`);
});