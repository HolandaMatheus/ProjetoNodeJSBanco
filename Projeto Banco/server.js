//importando o módulo padrão do NodeJS (http atraves do "require")
const http = require('http');
const {retornaDador} = require("./src/app")

const hostname = '127.0.0.1';
const port = 3333;

//criando o servidor que recebe uma requisição 'req' e responde algo 'res'
const server = http.createServer((req, res) => {

    //setando o status
    res.statusCode = 200;
    //setando o tipo de conteúdo da resposta
    res.setHeader('Content-Type', 'json');
    
    //setando a resposta em si
    res.end(retornaDador);
});

//subindo o servidor passando a porta e hostname
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
})

module.exports = server;