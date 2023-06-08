module.exports = {
    HOST: "127.0.0.1",
    USER: "mumbot",
    DB: "morgan",
    PASSWORD: "123456",
    ROOT_PASSWORD: "root_password",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};