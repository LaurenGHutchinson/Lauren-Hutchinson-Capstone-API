import debuggingCodeData from '../seed-data/debuggingData.js'
export async function seed(knex) {
  await knex('debuggingCodes').del();
  await knex('debuggingCodes').insert(debuggingCodeData);
};