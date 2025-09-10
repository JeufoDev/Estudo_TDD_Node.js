require('dotenv').config({debug: false});

module.exports = {
    test: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: process.env.SENHABANCO,
            database: 'barriga'
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};