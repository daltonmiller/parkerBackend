
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {question: 'Does Joe Biden want to defund the police?', answer: false, description: 'Joe Biden has stated on numerous occassions that he supports police reform not defunding the police', votes: 234},
        {question: 'Does President Trump have COVID-19?', answer: true, description: 'Yes Donald Trump has COVID-19', votes: 2324},
        {question: 'Are antibody drugs cures to COVID-19?', description: 'idk', votes: 23434},
        {question: 'Is the flu as deadly as COVID-19?', answer: false, description: 'The flu is not as deadly as COVID-19', votes: 2354},
        {question: 'Have most of the racial justice protests been peacful?', answer: true, description: 'Most of the protests have been peacful', votes: 234},
        {question: 'Did Joe Biden wear an earpiece during the first presidential debate?', answer: false, description: 'Joe Biden did not wear an ear piece', votes: 24434},
        {question: 'Would Joe Bidens tax plan raise taxes for those making less than $400,000 annually?', answer: false, description: 'No it will not', votes: 26734},
        {question: 'Is Joe Biden a socialist', answer: false, description: 'No he is not a socialist', votes: 2304},
        {question: `Does Joe Biden's climate change plan include banning fracking?`, answer: false, description: 'No it does not', votes: 28934},
        {question: `Does Joe Biden's healthcare plan offer healthcare to illegal residents?`, answer: false, description: 'It does not offer healthcare to illegal residents', votes: 2234}
      ]);
    });
};
