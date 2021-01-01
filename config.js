require('dotenv').config()

module.exports = {
    MONGO_DB_URL           : process.env.MONGO_DB_URL,
    MONGO_DEFAULT_DATABASE : process.env.MONGO_DEFAULT_DATABASE,
    MONGO_HOST             : process.env.NODE_ENV === 'development' ? 'localhost' : process.env.MONGO_HOST,
    MONGO_PASSWORD         : process.env.MONGO_PASSWORD,
    PORT                   : process.env.NODE_ENV === 'development' ? 8080 : process.env.PORT,
    MONGO_USER             : process.env.MONGO_USER
}

