const express = require('express');
const consign = require('consign');
const knex = require('knex')
const knexfile = require('../knexfile')
//const knexLogger = require('knex-logger') // Mostra no terminal qual a consulta SQL está sendo feita

const app = express();
//TODO criar chaveamento dinâmico
app.db = knex(knexfile.test)

//app.use(knexLogger(app.db));


consign({ cwd: 'src', verbose: false })
    .include('./config/middlewares.js')
    .then('./services')
    .then('./routes')
    .then('./config/routes.js')
    .into(app)


app.get('/', (req, res) => {
    res.status(200).json();
})

//Criação de eventos de erro caso não use nenhuma ferramenta de log
/*app.db.on('query', (query) => {
    console.log({ sql: query.sql, bindings: query.bindings ? query.bindings.join(',') : '' })
}).on('query-response', (response) => console.log(response))
    .on('error', error => console.log(error))
*/


module.exports = app;