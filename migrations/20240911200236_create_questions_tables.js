export function up(knex) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();        
        table.string('question').notNullable();        
        table.integer('skill_id').unsigned().notNullable() 
          .references('id').inTable('skills')     
          .onDelete('CASCADE')                     
          .onUpdate('CASCADE');           
        table.string('skill_name').notNullable();         
      });

};
  
  export function down(knex) {
    return knex.schema.dropTable('questions')
  };
