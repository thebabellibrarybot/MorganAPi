const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require('sequelize');
const { waitUntilReady } = require('wait-for-connection');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false, // Disable logging if not needed
    define: {
      timestamps: false, // Disable timestamps for tables if not needed
    }
  }
);

// Wait for the database server to be ready
async function waitForDatabase() {
  try {
    await waitUntilReady({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      timeout: 30000, // maximum time to wait in milliseconds
      retryInterval: 1000, // interval between connection attempts in milliseconds
    });
    console.log('Database is ready');
  } catch (error) {
    console.error('Error waiting for the database:', error);
    process.exit(1);
  }
}

// Function to authenticate and synchronize the database
async function initializeDatabase() {
  try {
    await waitForDatabase(); // Wait for the database to be ready
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Define your models and associations here
    db.folios = require("./folios.js")(sequelize, DataTypes);
    db.tombs = require("./tombs.js")(sequelize, DataTypes);

    await sequelize.sync({ force: false });
    console.log("Drop and re-sync db.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

initializeDatabase(); // Initialize the database

module.exports = db; 