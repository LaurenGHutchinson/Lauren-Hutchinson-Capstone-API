import initKnex from 'knex';
import config from '../knexfile.js'

const knex = initKnex(config);

const getSkills = async (_req,res) => {
    try{
        const data = await knex('skills');
        res.status(200).json(data);
    }catch (err){
        res.status(400).send(`Error retreiving Skills: ${err}`)
    }
}

const getJobSkills = async (req, res) => {
    try{
        const skillsData = await knex('skills')
        .select('skills.id', 'skill', 'category')
        .innerJoin('job_skills', 'skills.id', 'job_skills.skill_id')
        .where('job_skills.job_id', req.params.id);

        if(!skillsData){
            return res.status(404)
                .send(`Skills list for job with title: ${req.params.id} does not exist`)
        }
        res.status(200).json(skillsData)
    } catch (error){
        res.status(400).send(`Error retreiving Skills: ${error}`)
    }
}

export {
    getSkills,
    getJobSkills,
}