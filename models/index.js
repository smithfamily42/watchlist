const User = require('./User');
const Movie = require('./Movie');
const Show = require('./Show')

//User has many Shows and Movies

User.hasMany(Show, {
    foreignKey: 'show_user_id'
});
User.hasMany(Movie, {
    foreignKey: 'movie_user_id'
});

//User belongs to one show and movie
//ex. if user creates movie or show their user_id is attached to it

Movie.belongsTo(User, {
    foreignKey: 'movie_user_id',
    onDelete: 'CASCADE'
})
Show.belongsTo(User, {
    foreignKey: 'show_user_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Movie, Show};