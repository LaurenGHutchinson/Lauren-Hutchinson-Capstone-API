import codingChallengesData from '../seed-data/codingChallengesData.js'
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('codingChallenges').del();
  await knex('codingChallenges').insert(codingChallengesData);
};