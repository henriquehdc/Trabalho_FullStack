const mongoose = require('mongoose');
const premioController = require('./controller/premioController')

const uri = "mongodb+srv://HenriqueDC:HenriqueDC@cluster0.jd6clep.mongodb.net/reciclagem?retryWrites=true&w=majority";

mongoose.connect(uri).then(async () =>{

    //Criação do premio, como dependemos de um usuario para ter um premio 
    // informa-mos apenas a descrição, Quantidade e o id do usuario
    //const resposta = await premioController.premio.criar('Primeior Lugar', 2000,'642cb4202d49b6506e99e966');
    
    //Visualização dos dados do premio
    //const resposta = await premioController.premio.visualizar('642ca18e73ec4a50b4ac9a6d');
    
    //Atualização dos dados do premio
    //const resposta = await premioController.premio.atualizar('642ca18e73ec4a50b4ac9a6d','Primeior Lugar', 2500,'642c96eb838babeccfc67cf8');
   
    //Exclusão dos dados do premio
    //const resposta = await premioController.premio.deletar('642ca18e73ec4a50b4ac9a6d');
    
    console.log(resposta);
})