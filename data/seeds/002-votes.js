
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {vote: 245, question_id: 1},
        {vote: 456, question_id: 2},
        {vote: 345, question_id: 3},
        {vote: 234, question_id: 4},
        {vote: 4565, question_id: 5},
        {vote: 878, question_id: 6},
        {vote: 5834, question_id: 7},
        {vote: 67, question_id: 8},
        {vote: 54, question_id: 9},
        {vote: 348, question_id: 10}
      ]);
    });
};
