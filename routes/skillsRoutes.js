import express from 'express';
const skillsRouter = express.Router();
import initKnex from 'knex';
import config from '../knexfile.js'
import * as skillsController from '../controllers/skillsController.js'

const knex = initKnex(config);

skillsRouter.route('/')
    .get(skillsController.getSkills);
    
skillsRouter.route('/:id')
    .get(skillsController.getJobSkills);



export default skillsRouter;