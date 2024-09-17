
export function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    table.string('job_title').notNullable();
  })
};


export function down(knex) {
  return knex.schema.dropTable('jobs')
};
