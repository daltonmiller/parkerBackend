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
    return db("questions")
      .where( { id: id })
      .update(changes)
  }


  function find() {
    return db("questions").select("*").orderBy("id");
  }

  
  function findBy(filter) {
    return db("questions").where(filter).orderBy("id");
  }

function insert(property) {
    return db('questions')
      .insert(property, 'id')
      .then(([id]) => find(id));
  }
  
  function findById(id) {
    return db("questions").where({ id }).first();
  }

  function remove(id){
    return db("questions").where({ id }).del();
  }