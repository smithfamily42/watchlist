// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Data
// =============================================================
const movies = [
  {
    title: 'Transformers',
    genre: 'action',
    rating: 'PG-13',
    studio: 'Paramount'
  },
  {
    title: 'The Matrix',
    genre: 'action',
    rating: 'R',
    studio: 'Warner Bros.'
  },
  
];

const shows = [
    {
      title: 'Lupin',
      genre: 'action',
      rating: 'TV-14',
      service: 'Netflix'
    },
    {
      title: 'Dave',
      genre: 'Comedy',
      rating: 'MA',
      service: 'Hulu'
    },
    
  ];

// Routes
// =============================================================

app.get('/all-movies', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    movies: [],
    pageTitle: 'Movies',
  };

  // Loop through the animals, and send those that are pets to the index handlebars file.
  for (let i = 0; i < movies.length; i++) {
    // Get the current animal.
    let currentMovie = movies[i];

    data.movies.push(currentMovie);
  }

  res.render('movies', data);
});

app.get('/all-shows', (req, res) => {
    // Handlebars requires an object to be sent to the index.handlebars file.
    const data = {
      shows: [],
      pageTitle: 'Shows',
    };
  
    // Loop through the animals, and send those that are pets to the index handlebars file.
    for (let i = 0; i < shows.length; i++) {
      // Get the current animal.
      let currentShow = shows[i];
  
      data.shows.push(currentShow);
    }
  
    res.render('shows', data);
  });

app.get('/', (req, res) => {
    const data = {
        pageTitle: 'Homepage'
    };
    res.render("index", data);
})


/*app.get('/all-non-pets', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    movies: []
  };

  // Loop through the animals, and send those that are not pets to the index handlebars file.
  for (let i = 0; i < movies.length; i++) {
    // Get the current animal.
    let currentAnimal = movies[i];

    // Check if this animal is a pet.
    if (!currentAnimal.pet) {
      // If not, push it into our data.movies array.
      data.movies.push(currentAnimal);
    }
  }

  res.render('index', data);
});
*/
// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
