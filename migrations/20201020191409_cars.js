const { table, orWhereNotNull } = require("../data/config");

exports.up = async function(knex) {
  await knex.schema.createTable('cars', (table) => {
      table.increments('id')
      table.integer('vinNumber').notNull().unique()
      table.text('make').notNull()
      table.text('model').notNull()
      table.integer('mileage').notNull()
      table.boolean('cleanTitle').defaultTo(true)
      table.boolean('salvage').defaultTo(false)
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('cars')
  
};
