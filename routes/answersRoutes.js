import express from 'express';
const answersRouter = express.Router();
import initKnex from 'knex';
import config from '../knexfile.js'
import * as answersController from '../controllers/answersController.js'

const knex = initKnex(config);

answersRouter.route('/').get(answersController.index);

answersRouter.route('/:id').get(answersController.getAnswers);

export default answersRouter;