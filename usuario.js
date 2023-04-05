const mongoose = require('mongoose');
const usuarioController = require('./controller/usuarioController');

const uri = "mongodb+srv://HenriqueDC:HenriqueDC@cluster0.jd6clep.mongodb.net/reciclagem?retryWrites=true&w=majority";

mongoose.connect(uri).then(async () =>{

    //CRIAÇÃO DO USUARIO, A PONTUAÇÃO É INICIALIZADA COMO NULA
    //const resposta = await usuarioController.usuario.criar('Dalla3', '123', 0 ,'23°27', '33°72');
    
    //Visualização dos dados do usuario
    //const resposta = await usuarioController.usuario.visualizar('642c96eb838babeccfc67cf8');
    
    //Atualização dos dados do usuario
    //const resposta = await usuarioController.usuario.atualizar('642c96eb838babeccfc67cf8',"Dallinha", '321',0,'12°21','64°40');
   
    //Exclusão dos dados do usuario
    //const resposta = await usuarioController.usuario.deletar('642cb4c21375bd5a3e601900');
    
    console.log(resposta);
})