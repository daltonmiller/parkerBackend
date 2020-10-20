const db = require('../../data/dbConfig')

module.exports = {
    insert,
    edit,
    find,
    findBy,
    findById,
    remove,
  };
  
  function edit(id, changes){
    return db("votes")
      .where( { id: id })
      .update(changes)
  }


  function find() {
    return db("votes").select("*").orderBy("id");
  }
  function find() {
    return db("votes").select("*").orderBy("id");
  }
  
  function findBy(filter) {
    return db("votes").where(filter).orderBy("id");
  }

function insert(property) {
    return db('votes')
      .insert(property, 'id')
      .then(([id]) => find(id));
  }
  
  function findById(id) {
    return db("votes").where({ id }).first();
  }

  function remove(id){
    return db("votes").where({ id }).del();
  }