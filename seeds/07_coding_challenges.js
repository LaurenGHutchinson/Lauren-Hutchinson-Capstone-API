import codingChallengesData from '../seed-data/codingChallengesData.js'
export async function seed(knex) {
  await knex('codingChallenges').del();
  await knex('codingChallenges').insert(codingChallengesData);
};