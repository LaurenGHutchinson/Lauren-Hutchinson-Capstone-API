
export function up(knex) {
    return knex.schema.createTable('job_skills', (table) => {
      table.increments('id').primary();
      table.integer('job_id').unsigned().notNullable()
      .references('id').inTable('jobs')  
      .onDelete('CASCADE')                    
      .onUpdate('CASCADE');   
      table.integer('skill_id').unsigned().notNullable()
      .references('id').inTable('skills')    
      .onDelete('CASCADE')                      
      .onUpdate('CASCADE');   

    })
  };
  
  
  export function down(knex) {
    return knex.schema.dropTable('job_skills')
  };
  
