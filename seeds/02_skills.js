import skillsData from '../seed-data/skillsData.js'
export async function seed(knex) {
  await knex('skills').del();
  await knex('skills').insert(skillsData);
};
