const mongoose = require('mongoose');
const Estudiante = mongoose.model('estudiante');

exports.getEstudiantes = function(req,res){
    Estudiante.find((err,estudiantes)=>{
        if(err){
            res.send(500,err.message);
        }
        res.json(estudiantes);
    });
};

exports.getNuevoEstudiante = function(req,res){
    res.send(`Error: utilizar metodo post`);
}

exports.postNuevoEstudiante = function(req,res){
    let nuevoEstudiante = new Estudiante(req.body);
    nuevoEstudiante.save(function(err,estudiante){
        if(err) res.send(err);
        res.json(estudiante);
    })
}


