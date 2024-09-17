import answersData from '../seed-data/answersData.js'
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('answers').del();
  await knex('answers').insert(answersData);
};