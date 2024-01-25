// knexfile.js
module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        host: 'localhost',
        user: 'welinson',
        password: '135246',
        database: 'storemanagementsystem',
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/migrations',
      },
      seeds: {
        directory: './caminho/para/seeds',
      },
    },
  };
  