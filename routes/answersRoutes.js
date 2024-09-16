import express from 'express';
const answersRouter = express.Router();
import initKnex from 'knex';
import config from '../knexfile.js'
import * as answersController from '../controllers/answersController.js'

const knex = initKnex(config);

answersRouter.route('/').get(answersController.index);

answersRouter.get('/', async (_req,res) => {
    try{
        const data = await knex('answers');
        res.status(200).json(data);
    }catch (err){
        res.status(400).send(`Error retreiving Answers: ${err}`)
    }
})

export default answersRouter;