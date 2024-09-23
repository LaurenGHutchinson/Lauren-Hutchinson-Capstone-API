import express from 'express';
const debuggerRouter = express.Router();
import initKnex from 'knex';
import config from '../knexfile.js'
import * as debuggerController from '../controllers/debuggerControllers.js'

const knex = initKnex(config);

debuggerRouter.route('/:id')
    .get(debuggerController.getDebuggingCode);

export default debuggerRouter;