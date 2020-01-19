const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// conectando ao banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pwkmg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

// express usando json
app.use(express.json());

// usa as rotas definidas
app.use(routes);

// escutando a porta 3333
app.listen(3333);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)