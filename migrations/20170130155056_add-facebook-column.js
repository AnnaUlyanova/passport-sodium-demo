exports.up = knex => knex.schema.table('users', table => {
  table.string('facebookId')
})

exports.down = knex => knex.schema.dropColumn('facebookId')
