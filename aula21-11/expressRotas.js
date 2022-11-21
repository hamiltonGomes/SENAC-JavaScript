var express = require("express");
var app = express();

app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/paginasHTML/paginaInicial.html");
});

app.get("/sobre", function(req,res)
{
    res.sendFile(__dirname + "/paginasHTML/sobre.html");
});

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog!")  
});

app.listen(8090, function(){
    console.log("Servidor rodando na URL http:local host:8090")
});