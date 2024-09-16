export function up(knex) {
    return knex.schema.createTable('skills', (table) => {
        table.increments('id').primary();           // Auto-incrementing primary key
        table.string('skill').notNullable();        // Skill string
        table.string('category').notNullable();     // Skill category string
        table.string('job_title').notNullable();                 // Updates associated skills if the job id is updated
        table.timestamps(true, true);               // Adds created_at and updated_at columns
      });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('skills')
  };
