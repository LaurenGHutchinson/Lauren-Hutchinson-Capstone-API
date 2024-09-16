import questionsData from '../seed-data/questionsData.js'
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('questions').del();
  await knex('questions').insert(questionsData);
};

