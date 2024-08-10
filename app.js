const express = require('express');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();

app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile('index.html', { root: 'dist' });
});

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.MOVIE_DB_API_KEY}`,
  },
};

// `GET /cors` requests trigger this callback (like controller action)
app.get('/cors', (request, response) => {
  const url = `https://api.themoviedb.org/3/movie/${request.query.imdbID}?language=en-US`;

  fetch(url, options) // AJAX request to URL provided in query string
    .then((apiResponse) => apiResponse.json()) // parse response as JSON
    .then((data) => response.send(data)) // send parsed data to frontend
    .catch((error) => response.send(error));
});

app.get('/api', (request, response) => {
  const url = `https://api.themoviedb.org/3/find/${request.query.imdbID}?external_source=imdb_id`;
  fetch(url, options) // AJAX request to API
    .then((apiResponse) => apiResponse.json())
    .then((data) => {
      response.send(data);
    })
    .catch((error) => response.send(error));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
