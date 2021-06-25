//be able to add a show with id, title, genre, rating and service
//be able to update status wishlist, currently watching or started watching, and finished watching
//able to delete if wanted

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Show extends Model {

}


//initializing table definition
Show.init (
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
        modelName: 'show'
    }
)

module.exports = Show;
