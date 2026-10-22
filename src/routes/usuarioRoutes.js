const express = require('express'); 
const router = express.Router(); 
const { cadastrar } = require('../controllers/usuarioController'); 
router.post('/usuarios', cadastrar); 
router.post('/login', login); 

module.exports = router; 