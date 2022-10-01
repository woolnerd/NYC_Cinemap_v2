const express = require("express");
const fetch = require("node-fetch");

require("dotenv").config();

const app = express();

app.use(express.static("dist"));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});

// `GET /cors` requests trigger this callback (like controller action)
// `request` object contains request's query string, wildcard params, etc
// `response` object has `send` method for sending our server response
app.get('/cors', (request, response) => {
    const urlStart = "https://api.themoviedb.org/3/movie/";
    const apiKey = process.env.MOVIE_DB_API_KEY; // from .env (dev) or Heroku
    const imdbID = request.query.imdbID; // from query string
    const url = `${urlStart}/${imdbID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;


  fetch(url) // AJAX request to URL provided in query string
    .then(apiResponse => apiResponse.json()) // parse response as JSON
    .then(data => response.send(data)) // send parsed data to frontend
    .catch(error => response.send(error));
});

app.get('/api', (request, response) => {
  const urlStart = "https://api.themoviedb.org/3/find/";
  const apiKey = process.env.MOVIE_DB_API_KEY; // from .env (dev) or Heroku
  const imdbID = request.query.imdbID; // from query string
  const url = `${urlStart}/${imdbID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;

  fetch(url) // AJAX request to API
    .then(apiResponse => apiResponse.json())
    .then(data => response.send(data))
    .catch(error => response.send(error));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => null);
