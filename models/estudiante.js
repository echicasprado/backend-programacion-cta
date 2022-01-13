const mongoose = require('mongoose');

const StudenSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:false
    }
});

module.exports = mongoose.model('estudiante',StudenSchema);