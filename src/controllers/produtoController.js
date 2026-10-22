const produto = require('../models/Produtos'); 
const {Op} = require('sequelize');
  
async function listar(req, res) {  
    try {  
        const { pagina = 1, limite = 10, nome, data } = req.query;  
        
        const filtro = {};  
 
    if (nome) {  
        filtro.titulo = { [Op.like]: `%${nome}%` };  
    }  
    if (data) {  
        filtro.createdAt = { [Op.gte]: new Date(data) };  
    } 
    const livros = await Livro.findAll({  
        where: filtro,  
        limit: Number(limite),  
        offset: (Number(pagina) - 1) * Number(limite),  
    });  

    res.json(livros);  
    } catch (erro) {  
        res.status(400).json({  
            mensagem: 'Erro ao listar livros',  
            erro: erro.message,  
        });  
    }  
} 

async function deletar(req, res) {  
    try {  
        const { id } = req.params;  

        const livro = await Livro.findByPk(id);  

        if (!livro) {  
            return res.status(404).json({  
                mensagem: 'Livro não encontrado',  
            });  
        }  

    await livro.destroy();  
    
    res.status(200).json({  
        mensagem: 'Livro removido com sucesso',  
    });  
    
    } catch (erro) {  
        res.status(400).json({  
            mensagem: 'Erro ao remover livro',  
            erro: erro.message,  
        });  
    }  
}  

module.exports = { cadastrar, listar, deletar };