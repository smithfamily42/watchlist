//be able to add a movie with id, title, genre, rating and studio
//be able to update status wishlist, currently watching or started watching, and finished watching
//able to delete if wanted


const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        externalMovieId: {
            type: Number,
            required: true,
            unique: true
        },
        rating: {
            type: Number,
        },
        title: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: String,
        },
        poster: {
            type: String,
        },
        trailer: {
            type: String,
        },
    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
