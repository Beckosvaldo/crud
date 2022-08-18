const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube' ];

server.get('/cursos/:index', (req, res) =>{
    const { index } = req.parms;

    return res.jason(cursos[index]);
});

server.get('/cursos', (req, res) =>{
    return res.jason(cursos)
});

server.post('/cursos', (req,res) => {
    const {name} = req.body;
    cursos.push(name);

    return res.jason(cursos);
});

server.put('/curso/:index', (req,res) => {
    const{ index } = req.parms;
    const { name } = req.body;
    
    cursos[index] = name;

    return res.jason(cursos);
});

server.delete('/cursos/:index', (req,res) => {
    const { index } = req.parms;

    cursos.splice(index, 1);
    return res.jason({ message: "O curso foi deletado" });
})






server.listen(3000);