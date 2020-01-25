
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'jeff', password: 'jeff'},
        {id: 2, username: 'joe', password: 'joe'},
        {id: 3, username: 'jim', password: 'jim'}
      ]);
    });
};
