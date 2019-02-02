/* eslint-disable */
module.exports = {
  port: process.env.PORT || 8081,
  db: {
      database: process.env.DB_NAME || 'tabtracker',
      user: process.env.DB_USER || 'tabtracker',
      password: process.env.DB_PASS || 'tabtracker',
      options: {
          // what type of db we are connecting to
        dialect: process.env.DIALECT || 'sqlite',
            // location of d
        host: process.env.HOST || 'localhost',
            //where to store
        storage: './tabtracker.sqlite'     
      }
  }
}
