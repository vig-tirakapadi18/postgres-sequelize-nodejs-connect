const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const dbName = process.env.POSTGRES_DB_NAME;
const dbUser = process.env.POSTGRES_NAME;
const dbPassword = process.env.POSTGRES_PASSWORD;
const dbHost = process.env.POSTGRES_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword,
  {
    dialect: "postgres",
    host: dbHost
  }
);

// const sequelize = new Sequelize("postgres", "postgres", "system",
//   {
//     dialect: "postgres",
//     host: "localhost"
//   }
// );

module.exports = sequelize;