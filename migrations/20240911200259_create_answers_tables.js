export function up(knex) {
    return knex.schema.createTable('answers', (table) => {
        table.increments('id').primary();       
        table.string('answer').notNullable();        
        table.tinyint('is_correct').notNullable();     
        table.integer('question_id').unsigned().notNullable()  
          .references('id').inTable('questions')     
          .onDelete('CASCADE')                      
          .onUpdate('CASCADE');                     
        table.timestamps(true, true);               
      });
};
  
  export function down(knex) {
    return knex.schema.dropTable('answers')
  };
 