
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('submissions').del()
    .then(function () {
      // Inserts seed entries
      return knex('submissions').insert([
        {askedQuestions: "should joe be in prison?"},
        {askedQuestions: "should donald be in prison"},
        {askedQuestions: "what tastes the best, coke or diet coke"},
        {askedQuestions: "is chad johnson faster than a horse"},
        {askedQuestions: "are the pats cheaters"},
        {askedQuestions: "are these questions relavant"},
        {askedQuestions: "is life a simulation"},
        {askedQuestions: "whos the best nba player"},
        {askedQuestions: "how fast is usain bolt"},
        {askedQuestions: "when is christmas"},
        {askedQuestions: "nike or adidas?"},
        {askedQuestions: "whos the best at fortnite"}
      ]);
    });
};
