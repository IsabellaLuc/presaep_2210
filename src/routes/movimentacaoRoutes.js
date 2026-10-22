const express = require('express'); 
const router = express.Router(); 
const movimentacaoController = require('../controllers/movimentacoesController'); 
const auth = require('../middlewares/auth'); 
  
router.post('/movimentacoes', auth, movimentacoesController.cadastrar); 
  
module.exports = router; 