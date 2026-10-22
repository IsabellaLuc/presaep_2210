const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/database'); 
  
const produto = sequelize.define('produto', { 
  nome: { 
    type: DataTypes.STRING, 
    allowNull: false, 
  }, 
  marca: { 
    type: DataTypes.STRING, 
    allowNull: false, 
  }, 
  categoria: { 
    type: DataTypes.STRING, 
    allowNull: false,
  }, 
  quantidade_estoque: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    defaultValue: 0, 
  }, 
}); 
  
module.exports = produto; 