const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
  // {origin: 'http://meuapp.com'} caso queira colocar em producao e restringir quem pode acessar a aplicacao
));
app.use(express.json());
app.use(routes);

/**
 *  Rota / Recurso
 */

/**
 * Metodos HTTP:
 *
 * Get : Buscar uma informação do back-end
 * POST : Criar uma informação no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query params: Parametros nomeados enviados na rota após "?" (Filtros , paginacao)
 * Route params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisicao, utilizado pra criar ou alterar recursos
 */

/**
 * SQL: MySQL. SQLitle, postgresql, oracle
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

 /**
  * Drives: select * from users
  * Query Builder: table (`user`).select(`*`).where
  * 
  */
app.listen(3333);

