const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ShowWatchlist extends Model {

}


//initializing table definition
ShowWatchlist.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        show_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        //call in connection
        timestamps: false,
        //making timestamp false will NOT add created_at and updated_at columns in DB 
        freezeTableName: true,
        underscored: true,
        modelName: 'show_watchlist'
    }
)

module.exports = ShowWatchlist;