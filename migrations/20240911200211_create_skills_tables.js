export function up(knex) {
    return knex.schema.createTable('skills', (table) => {
        table.increments('id').primary();           // Auto-incrementing primary key
        table.string('skill').notNullable();        // Skill string
        table.string('category').notNullable();     // Skill category string
      });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('skills')
  };
