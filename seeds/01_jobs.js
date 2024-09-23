import jobsData from '../seed-data/jobsData.js'
export async function seed(knex) {
  await knex('jobs').del();
  await knex('jobs').insert(jobsData);
};

