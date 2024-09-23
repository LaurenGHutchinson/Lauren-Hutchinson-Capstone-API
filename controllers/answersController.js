import initKnex from 'knex';
import config from '../knexfile.js'

const knex = initKnex(config);

const index = async (_req,res) => {
    try{
        const data = await knex('answers');
        res.status(200).json(data);
    }catch (error){
        res.status(400).send(`Error retreiving Answers: ${error}`)
    }
}


const getAnswers = async (req,res) => {
    try{
        const answerData = await knex('answers')
            .select('answers.id', 'answer', 'question_id', 'is_correct')
            .innerJoin('questions', 'answers.question_id', 'questions.id')
            .where('answers.question_id', req.params.id);

            if(!answerData){
                return res.status(404)
                    .send(`Answer list for question with id: ${req.params.id} does not exist`)
            }
            res.status(200).json(answerData)
        } catch (error){
            res.status(400).send(`Error retreiving Answers: ${error}`)
        }
}

export {
    index,
    getAnswers,
}