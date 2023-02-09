module.exports = {
  development: {
  url:`postgres://postgres:password@localhost:5432/postgres`,
    dialect: "postgres",
    // dialectOptions: {
    //   ssl: {
    //     require:true,
    //     rejectUnauthorized: false,

    //   }
    // }
  },
  production: {
   url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require:true,
        rejectUnauthorized: false,
        
      }
    }
  }
}
