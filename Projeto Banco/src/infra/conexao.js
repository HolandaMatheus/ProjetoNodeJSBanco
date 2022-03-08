//importando o modulo do mysql
const mysql = require("mysql2");

//criando as configurações para acessar o banco
const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@Xptoxp33",
    database: "fiap"
}

//iniciando a conexao
const conexao = mysql.createConnection(config);

//disponibilizando a conexao para outros módulos
module.exports = conexao;