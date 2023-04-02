import { config } from 'dotenv';
import knex from 'knex';
config();

export const connection = knex({
    client: process.env.DB_CLIENT,
    connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
});
