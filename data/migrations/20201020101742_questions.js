
exports.up = function(knex) {
  return(
      knex.schema
      .createTable('questions', tbl => {
          tbl.increments()
          tbl.string('question').notNullable()
          tbl.boolean('answer')
          tbl.string('description').notNullable()
          tbl.float('votes').notNullable()
        //   tbl.integer('votes_id')
        //   .unsigned()
        //   .notNullable()
        //   .references('votes.id')
        //   .onUpdate('CASCADE')
        //   .onDelete('CASCADE')
      })
    //   .createTable('votes', tbl => {
    //       tbl.increments()
    //       tbl.float('vote').notNullable()
    //   })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
    //   .dropTableIfExists('votes')
      .dropTableIfExists('questions')
      
      
  )
};
