const db = require('../../data/dbConfig')


module.exports = {
    find
  };

  function find() {
    return db("submissions").select("*").orderBy("id");
  }
  

  function insert(property) {
    return db('submissions')
      .insert(property, 'id')
      .then(([id]) => find(id));
  }