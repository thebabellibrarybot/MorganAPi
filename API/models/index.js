const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
);
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}
).catch(err => {
    console.error('Unable to connect to the database XXX:', err ,'\n', 'err from index.js', '\n', '\n');
}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.folios = require("./folios.js")(sequelize, DataTypes);
db.tombs = require("./tombs.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Drop and re-sync db.");
    }
);

module.exports = db; 