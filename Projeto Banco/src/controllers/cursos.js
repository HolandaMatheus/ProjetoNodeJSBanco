const {listarTodos} = require("../services/cursos")

const index = async (req, res) => {

    try {
        const cursos = await listarTodos();

        res.send(cursos);

    } catch (erro) {
        console.error(erro);
    }
}

module.exports = { index }