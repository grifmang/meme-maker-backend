
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('memes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('memes').insert([
        {id: 1, meme_url: 'https://res.cloudinary.com/ddzjaztcp/image/upload/v1579871948/Ancient-Aliens_ce6pwx.jpg'},
        {id: 2, meme_url: 'https://res.cloudinary.com/ddzjaztcp/image/upload/v1579871945/batman-blank-meme-2_eia06m.jpg'},
        {id: 3, meme_url: 'https://res.cloudinary.com/ddzjaztcp/image/upload/v1579871941/tumblr_pgsx0eMonq1wnn8q7_540_f25rrm.jpg'}
      ]);
    });
};
