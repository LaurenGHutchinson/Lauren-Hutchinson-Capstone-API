import express from 'express';
const questionsRouter = express.Router();
import initKnex from 'knex';
import config from '../knexfile.js'
import * as questionsController from '../controllers/questionsController.js'

const knex = initKnex(config);

questionsRouter.route('/')
    .get(questionsController.index);

questionsRouter.route('/:id')
    .get(questionsController.getQuestions);

export default questionsRouter;