export function up(knex) {
    return knex.schema.createTable('debuggingCodes', (table) => {
        table.increments('id').primary();          
        table.string('javascript').notNullable();       
        table.string('typescript').notNullable();        
        table.string('python').notNullable();   
        table.string('java').notNullable();        
        table.string('csharp').notNullable();    

      });
};
  
  export function down(knex) {
    return knex.schema.dropTable('debuggingCodes')
  };

