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