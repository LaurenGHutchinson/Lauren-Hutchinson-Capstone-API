export function up(knex) {
    return knex.schema.createTable('answers', (table) => {
        table.increments('id').primary();           // Auto-incrementing primary key
        table.string('answer').notNullable();        // Skill string
        table.tinyint('is_correct').notNullable();     // Skill category string
        table.integer('question_id').unsigned().notNullable()  // Foreign key to jobsData
          .references('id').inTable('questions')     // Links to jobsData(id)
          .onDelete('CASCADE')                      // Deletes associated skills if the job is deleted
          .onUpdate('CASCADE');                     // Updates associated skills if the job id is updated
        table.timestamps(true, true);               // Adds created_at and updated_at columns
      });
};
  
  export function down(knex) {
    return knex.schema.dropTable('answers')
  };
 