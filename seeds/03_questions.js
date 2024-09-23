import questionsData from '../seed-data/questionsData.js'
export async function seed(knex) {
  await knex('questions').del();
  await knex('questions').insert(questionsData);
};

