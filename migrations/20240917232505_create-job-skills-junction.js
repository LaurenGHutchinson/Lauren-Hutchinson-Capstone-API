
export function up(knex) {
    return knex.schema.createTable('job_skills', (table) => {
      table.increments('id').primary();
      table.integer('job_id').unsigned().notNullable()
      .references('id').inTable('jobs')     // Links to jobsData(id)
      .onDelete('CASCADE')                      // Deletes associated skills if the job is deleted
      .onUpdate('CASCADE');   
      table.integer('skill_id').unsigned().notNullable()
      .references('id').inTable('skills')     // Links to jobsData(id)
      .onDelete('CASCADE')                      // Deletes associated skills if the job is deleted
      .onUpdate('CASCADE');   

    })
  };
  
  
  export function down(knex) {
    return knex.schema.dropTable('jobs')
  };
  
