//be able to add a show with id, title, genre, rating and service
//be able to update status wishlist, currently watching or started watching, and finished watching
//able to delete if wanted

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
        likedMovies: [{
            type: Schema.Types.ObjectId,
            ref: 'Movie',
            validate: (arr) => {
                return arr.filter(v => v === null).length === 0; 
            }
        }],
        dislikedMovies: [{
            type: Schema.Types.ObjectId,
            ref: 'Movie',
            validate: (arr) => {
                return arr.filter(v => v === null).length === 0; 
            }
        }]
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
