const express = require("express");
const {index: listarTodos} = require("./controllers/cursos");

const app = express();

app.use(express.json());

const retornaDador = app.get("/cursos", listarTodos);

app.post("/cursos", (req, res) => {

    const curso = req.body;

    curso.id = 3;

    addCurso(curso);

    res.status(201).send();

});

module.exports = app;