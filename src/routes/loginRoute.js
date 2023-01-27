const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/login', customerController.validate);
router.get('/logout', customerController.logout);
//talleres
router.get('/etiquetas',customerController.etiquetas);
router.get('/listas',customerController.listas);
//exposiciones
router.get('/skeeleton',customerController.skeeleton);
router.get('/pureCss',customerController.pureCss);
router.get('/tailwind',customerController.tailwind);
//registro y pagina de inicio
router.get('/ListUsuarios', customerController.listUsuarios);
router.get('/mostrarregistro', customerController.mostrarregistro)
router.post('/registrarUsuario', customerController.registroUsuarios)

module.exports = router;