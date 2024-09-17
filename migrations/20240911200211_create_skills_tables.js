export function up(knex) {
    return knex.schema.createTable('skills', (table) => {
        table.increments('id').primary();           // Auto-incrementing primary key
        table.string('skill').notNullable();        // Skill string
        table.string('category').notNullable();     // Skill category string
        table.string('job_title').notNullable();
        table.integer('job_id').unsigned().notNullable()  // Foreign key to jobsData
        .references('id').inTable('jobs')     // Links to jobsData(id)
        .onDelete('CASCADE')                      // Deletes associated skills if the job is deleted
        .onUpdate('CASCADE');                   // Updates associated skills if the job id is updated
      });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('skills')
  };
