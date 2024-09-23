export function up(knex) {
    return knex.schema.createTable('skills', (table) => {
        table.increments('id').primary();    
        table.string('skill').notNullable();   
        table.string('category').notNullable();    
      });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('skills')
  };
