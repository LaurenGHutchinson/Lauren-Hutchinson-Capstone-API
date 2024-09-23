export function up(knex) {
    return knex.schema.createTable('debuggingCodes', (table) => {
        table.increments('id').primary();           // Auto-incrementing primary key
        table.string('javascript').notNullable();        // Skill string
        table.string('typescript').notNullable();        // Skill string
        table.string('python').notNullable();        // Skill string
        table.string('java').notNullable();        // Skill string
        table.string('csharp').notNullable();        // Skill string
                 // Updates associated skills if the job id is updated
      });
};
  
  export function down(knex) {
    return knex.schema.dropTable('debuggingCodes')
  };

