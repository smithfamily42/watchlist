//be able to add a movie with id, title, genre, rating and studio
//be able to update status wishlist, currently watching or started watching, and finished watching
//able to delete if wanted


const { Model, DataTypes } = require('sequelize');
//allows us to find define our table
const sequelize = require('../config/connection');
//allows us to connect to db

class Movie extends Model {

}

Movie.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            //the only primary key = id = no duplicates
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studio: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        //works with modelName to make sure it doesn't add the 's'. TRUE = if you want to change the modelName
        underscored: true,
        //makes sure that it adds an underscore like user_id in table based on how it's written in js
        modelName: 'movie'
        //sequelize tends to add an 's' to the model name, so if you don't want that then claim the model name here
    }
)

module.exports = Movie;
//To be able to use 'Movie' in other files