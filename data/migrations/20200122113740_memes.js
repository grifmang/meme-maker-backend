
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.string('username', 128).notNullable().unique();
      table.string('password').notNullable();
      table.timestamps();
  })
    .createTable('memes', table => {
      table.increments();
      table.string('meme_url', 1000).index();
      table.timestamps();
    })
    .createTable('user_memes', table => {
      table.increments();
      table.integer('user_id').unsigned()
        .references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE');
      table.integer('meme_id').unsigned()
        .references('id').inTable('memes')
        .onDelete('CASCADE').onUpdate('CASCADE');
      table.timestamps();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_memes')
    .dropTableIfExists('memes')
    .dropTableIfExists('users');
};
