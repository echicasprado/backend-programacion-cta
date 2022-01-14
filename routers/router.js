const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/controller');

router.get('/',(req,res)=>{
    res.send("Hola desde router!")
});

router.get('/estudiantes',estudianteController.getEstudiantes);
router.get('/nuevoestudiante',estudianteController.getNuevoEstudiante);
router.post('/nuevoestudiante',estudianteController.postNuevoEstudiante);
router.post('/detalle',estudianteController.getDetalleEstudiante);

module.exports = router;