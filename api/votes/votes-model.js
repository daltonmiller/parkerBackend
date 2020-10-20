const db = require('../../data/dbConfig')

module.exports = {
  

    find,
    findBy
 
  };
  

  function find() {
    return db("votes").select("*").orderBy("id");
  }

  function findBy(filter) {
    return db("votes").where(filter).orderBy("id");
  }
