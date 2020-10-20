const db = require('../../data/dbConfig')

module.exports = {
    insert,
    edit,
    find,
    findBy,
    findById,
    remove,
    trending
  };
  
  function edit(id, changes){
    return db("questions")
      .where( { id: id })
      .update(changes)
  }


  function find() {
    return db("questions").orderBy('votes', 'desc');
  }

  
  function findBy(filter) {
    return db("questions").where(filter).orderBy("id");
  }
 function trending(){
     return db('questions').orderBy('votes', "desc").limit(5)
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