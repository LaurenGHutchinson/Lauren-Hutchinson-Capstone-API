import express from 'express';
const jobsRouter = express.Router();
import initKnex from 'knex';
import config from '../knexfile.js'
import * as jobsController from '../controllers/jobsController.js'

const knex = initKnex(config);

jobsRouter.route('/')
    .get(jobsController.getJobs);

export default jobsRouter;