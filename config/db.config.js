module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "test123",
    DB: "farmer1",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };