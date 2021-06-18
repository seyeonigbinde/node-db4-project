const common = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: { // process.env.DB_ENV || 'development'
    ...common,
    connection: {
      filename: './data/recipes.db3',
    },
  },
  testing: { // process.env.DB_ENV 'testing'
    ...common,
    connection: {
      filename: './data/test.db3',
    },
  },
  production: {

  },
  pool: { // needed to enable foreign keys in sqlite
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
};
