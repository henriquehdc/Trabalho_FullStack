const mongoose = require('mongoose');
const reciclagemController = require('./controller/reciclagemController')

const uri = "mongodb+srv://HenriqueDC:HenriqueDC@cluster0.jd6clep.mongodb.net/reciclagem?retryWrites=true&w=majority";

mongoose.connect(uri).then(async () =>{

    //Criação da reciclagem, devemos indicar o id do usuario 
    //const resposta = await reciclagemController.reciclagem.criar('papel', 'imagem2', 200 ,800, '642cb5fe5918fe1193fbc544');
    
    //Visualização dos dados da reciclagem
    //const resposta = await reciclagemController.reciclagem.visualizar('642c9de523c3adb8a7673035');
    
    //Atualização dos dados do reciclagem
    //const resposta = await reciclagemController.reciclagem.atualizar('642c9de523c3adb8a7673035', 'papel','imagem att', 800, 600);
   
    //Exclusão dos dados do reciclagem
    //const resposta = await reciclagemController.reciclagem.deletar('642cb7f3e48fe3f9f1860720');
    
    console.log(resposta);
})