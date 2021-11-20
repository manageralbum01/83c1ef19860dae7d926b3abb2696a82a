import knex from 'knex'
import dbConfig from './knexfile'

export const db = knex(dbConfig)
