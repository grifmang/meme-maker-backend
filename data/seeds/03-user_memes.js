
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_memes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_memes').insert([
        {id: 1, user_id: 1, meme_id: 1},
        {id: 2, user_id: 2, meme_id: 2},
        {id: 3, user_id: 3, meme_id: 3}
      ]);
    });
};
