import express from 'express';
import knex from './database/connection';
import PointController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

//index, show, create, update, delete

const routes = express.Router();
const pointController = new PointController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointController.create);
routes.get('/points/:id', pointController.show);
routes.get('/points', pointController.index);

export default routes;

// Service Pattern
// Repository Pattern