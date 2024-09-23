import initKnex from 'knex';
import config from '../knexfile.js'

const knex = initKnex(config);

const getCodingChallenge = async (req,res) => {
    try{
        const data = await knex('codingChallenges')
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retreiving coding challenge prompts: ${error}`)
}
}

export {
    getCodingChallenge,
}