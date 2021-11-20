import { Knex } from 'knex'

const tableName = 'users'

export const up = async (knex: Knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('followers').defaultTo(0)
  })
}

export const down = async (knex: Knex) => {
  return knex.schema.dropTable(tableName)
}
