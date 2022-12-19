const Sequelize = require('sequelize');
const sequelize = new Sequelize('banco1', 'root', '123456', {
    host: 'localhost',
    dialect: "mysql",
});


const Postagem = sequelize.define('postagens', { // "postagens" é o nome da tabela nesse caso
    email:{
        type: Sequelize.STRING
    },
    assunto:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

/* Postagem.sync({force:true}) */
// drop table nomeDaTabela -> código para apagar tabela
// código para criação da tabela ^

Postagem.create({
    email: "mayara@hotmail.com",
    assunto: "MayFest!",
    conteudo: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
},
{ 
    email: "hamilton@hotmail.com",
    assunto: "MayFest!",
    conteudo: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
},
{ 
    email: "joão@hotmail.com",
    assunto: "MayFest!",
    conteudo: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
},
{ 
    email: "gustavo@hotmail.com",
    assunto: "MayFest!",
    conteudo: "Lhe convido para minha festa no dia 18 de dezembro de 2022! Vai ser massa!",
});

// o nodemon vai ficar atualizand cada informação que estiver no script.
// o node vai computar os dados na tabela sempre que for utilizado.

//  DELETE FROM clientes WHERE id = 5
//  UPDATE clientes SET telefone = 2222-2222 WHERE id = 4
//  INSERT INTO clientes (id, nome, telefone, genero) VALUES (5, ‘Miguel’, 4444-4444, ‘M’)
//  SELECT * FROM clientes WHERE genero = ‘F’
//  SELECT * FROM clientes