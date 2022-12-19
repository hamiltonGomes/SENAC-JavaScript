const Sequelize = require('sequelize');
const sequelize = new Sequelize('banco1', 'root', '123456', {
    host: 'localhost',
    dialect: "mysql",
});

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso.");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro);
});

//  npm install --save sequelize
//  npm install --save mysql2
//  npm install --g nodemon