const Sequelize = require('sequelize')

module.exports = new Sequelize('twitterDB', 'root', 'root', {
    // sqlite
    dialect: 'sqlite',
    storage: 'twitterDB'
});