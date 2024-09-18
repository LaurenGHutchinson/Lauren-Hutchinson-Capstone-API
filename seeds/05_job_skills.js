import jobSkillsData from '../seed-data/jobSkills.js'
export async function seed(knex) {
  await knex('job_skills').del();
  await knex('job_skills').insert(jobSkillsData);
};
