import initKnex from 'knex';
import config from '../knexfile.js'

const knex = initKnex(config);

const getDebuggingCode = async (req,res) => {
try{
    const {id} = req.params;
    if (['javascript', 'typescript', 'python', 'java', 'csharp'].includes(id)) {
     
        const data = await knex('debuggingCodes')
            .select('id', id)
            .whereNotNull(id);

        res.status(200).json(data);
    } else {
        res.status(400).json({ error: 'Invalid language specified' });
    }

} catch (error) {
    res.status(400).send(`Error retreiving debugging challenge code: ${error}`)
}
}


export {
    getDebuggingCode,
}