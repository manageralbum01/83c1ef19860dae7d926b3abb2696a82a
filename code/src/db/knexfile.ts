import dotenv from 'dotenv'
import * as path from 'path'

const env = process.env.NODE_ENV || 'local'

dotenv.config({ path: path.join(__dirname, '../../', `.env.${env}`) })

const dbConfig = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: path.resolve('./migrations'),
  },
  seeds: {
    directory: path.resolve('./seeds'),
  },
}

export default dbConfig
