const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MovieWatchlist extends Model {

}


//initializing table definition
MovieWatchlist.init (
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
        movie_title: {
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
        modelName: 'movie_watchlist'
    }
)

module.exports = MovieWatchlist;