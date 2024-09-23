import initKnex from 'knex';
import config from '../knexfile.js'

const knex = initKnex(config);

const index = async (_req,res) => {
    try{
        const data = await knex('questions');
        res.status(200).json(data);
    }catch (error){
        res.status(400).send(`Error retreiving all questions: ${error}`)
    }
}

const getQuestions = async (req,res) => {
    try{
        const questionData = await knex('questions')
            .select('questions.id', 'question', 'skill_id', 'skill_name')
            .innerJoin('skills', 'questions.skill_id', 'skills.id')
            .where('questions.skill_id', req.params.id);

            if(!questionData){
                return res.status(404)
                    .send(`Question list for skills with title: ${req.params.id} does not exist`)
            }
            res.status(200).json(questionData)
        } catch (error){
            res.status(400).send(`Error retreiving Questions: ${error}`)
        }
}


export {
    index,
    getQuestions,
}