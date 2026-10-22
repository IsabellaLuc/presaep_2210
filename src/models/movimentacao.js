const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/database'); 
const produto = require('./Produtos'); 
const usuario = require('./usuario');
  
const Movimentacao = sequelize.define('Movimentacao', { 
  tipo: { 
    type: DataTypes.ENUM('entrada', 'saida'), 
    allowNull: false, 
  }, 
  quantidade: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
  }, 
  data: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW, 
  }, 
}); 
  
produto.hasMany(Movimentacao, { foreignKey: 'produto_id' }); 
Movimentacao.belongsTo(produto, { foreignKey: 'produto_id' }); 
usuario.hasMany(Movimentacao, { foreignKey: 'usuario_id' });
Movimentacao.belongsTo(usuario, { foreignKey: 'usuario_id' });  

module.exports = Movimentacao; 