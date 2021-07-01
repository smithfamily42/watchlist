const User = require('./User');
const Movie = require('./Movie');
const Shows = require('./Shows')

//User has many Shows and Movies

User.hasMany(Shows, {
    foreignKey: 'user_id'
});
User.hasMany(Movie, {
    foreignKey: 'user_id'
});

//User belongs to one show and movie
//ex. if user creates movie or show their user_id is attached to it

Movie.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
Shows.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Movie, Shows};