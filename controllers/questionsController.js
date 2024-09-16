import initKnex from 'knex';
import config from '../knexfile.js'

const knex = initKnex(config);

const index = async (_req,res) => {
    try{
        const data = await knex('questions');
        res.status(200).json(data);
    }catch (err){
        res.status(400).send(`Error retreiving Questions: ${err}`)
    }
}

export {
    index,
}