import initKnex from 'knex';
import config from '../knexfile.js'

const knex = initKnex(config);

const getCodingChallenge = async (req,res) => {
try{
        const data = await knex('codingChallenges')

        res.status(200).json(data);
} catch (error) {

    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
}
}

export {
    getCodingChallenge,
}