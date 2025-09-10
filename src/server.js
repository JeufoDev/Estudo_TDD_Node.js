const express = require('express');
const server = express();


server.get('/', (req, res) => {
    res.status(200).json();
})

server.listen(3001, () => {
    console.log('Rodando na porta 3001')
})