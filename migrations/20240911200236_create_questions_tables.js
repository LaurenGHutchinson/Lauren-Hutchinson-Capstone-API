export function up(knex) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();           // Auto-incrementing primary key
        table.string('question').notNullable();        // Skill string
        table.integer('skill_id').unsigned().notNullable()  // Foreign key to jobsData
          .references('id').inTable('skills')     // Links to jobsData(id)
          .onDelete('CASCADE')                      // Deletes associated skills if the job is deleted
          .onUpdate('CASCADE');                     // Updates associated skills if the job id is updated
      });
};
  
  export function down(knex) {
    return knex.schema.dropTable('questions')
  };
