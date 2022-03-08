/*
const cursos = [
    {
        id:1,
        nome: "Ciência da Computação",
        ch:1500
    },
    {
        id:2,
        nome: "Engenharia da Computação",
        ch: 2000,
    }
];
*/
//importando a conexao com banco
const conexao = require("../infra/conexao");

const listarTodos = () => {

    const sql = "SELECT * FROM cursos"

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql);

        conexao.query(query, (erro, retorno) => {

            if(erro) return reject(erro);

            resolve(retorno);

        })
    })

};

const adicionar = (curso) => cursos.push(curso);

const buscarPorId = (id) => cursos.find(c => c.id === id);

module.exports = {listarTodos, adicionar, buscarPorId}