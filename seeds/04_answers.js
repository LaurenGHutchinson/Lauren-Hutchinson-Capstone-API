import answersData from '../seed-data/answersData.js'
export async function seed(knex) {
  await knex('answers').del();
  await knex('answers').insert(answersData);
};