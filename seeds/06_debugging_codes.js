import debuggingCodeData from '../seed-data/debuggingData.js'
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('debuggingCodes').del();
  await knex('debuggingCodes').insert(debuggingCodeData);
};