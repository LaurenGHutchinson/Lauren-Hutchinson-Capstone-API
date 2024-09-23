import express from 'express';
const codingChallengeRouter = express.Router();
import initKnex from 'knex';
import config from '../knexfile.js'
import * as codingChallengeController from '../controllers/codingChallengeController.js'

const knex = initKnex(config);

codingChallengeRouter.route('/').get(codingChallengeController.getCodingChallenge);

export default codingChallengeRouter;