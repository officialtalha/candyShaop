const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const DATA = sequelize.define('shop', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = DATA;