require("dotenv").config()

module.exports = {
    client: "mysql",
    connection: {
        user: process.env.SERVER_USER,
        password: process.env.SERVER_PASSWORD,
        host: process.env.SERVER_HOST,
        port: process.env.SERVER_DB_PORT,
        database: process.env.SERVER_DB
    },
    migrations: {
        tablename: "migrations",
        directory: `${__dirname}/src/database/migrations`

    }


}