export function up(knex) {
    return knex.schema.createTable('codingChallenges', (table) => {
        table.increments('id').primary();          
        table.string('question').notNullable();       
        table.string('expectedOutcome').notNullable();        
      });
};
  
  export function down(knex) {
    return knex.schema.dropTable('codingChallenges')
  };

