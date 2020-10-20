
exports.up = function(knex) {
  return(
      knex.schema
      .createTable('questions', tbl => {
          tbl.increments()
          tbl.string('question').notNullable()
          tbl.boolean('answer').notNullable()
          tbl.string('description').notNullable()
      })
      .createTable('votes', tbl => {
          tbl.increments()
          tbl.float('vote').notNullable()
          tbl.integer('question_id')
          .unsigned()
          .notNullable()
          .references('questions.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      })
  )
};

exports.down = function(knex) {
  return(
      knex.schema
      .dropTableIfExists('votes')
      .dropTableIfExists('questions')
  )
};
