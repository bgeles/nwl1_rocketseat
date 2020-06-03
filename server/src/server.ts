import express from 'express';
import routes from './routes';

const app = express();

//Habilitando funcionalidade Json no Express
app.use(express.json());
//Usando arquivo de rotas
app.use(routes);

app.listen(3333);