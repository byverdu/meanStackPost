// Dummy data

const movieData = {
  title: 'Rambo',
  poster: 'http://ia.media-imdb.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  rating: 8,
  myRating: 8.4,
  year: 1999,
  imdburl: 'https://www.imdb.com/title/tt0090190',
  genres: ['Action', 'Comedy', 'Horror'],
  actors: ['Michael Herz', 'Lloyd Kaufman']
};

const showData = Object.assign({}, movieData, { title: 'Lost', seasons: 6 });

const sampleMovie = {
  title: 'Star Wars: Episode IV - A New Hope',
  _year_data: '1977',
  year: 1977,
  rated: 'PG',
  released: '1977-05-24',
  runtime: '121 min',
  genres: 'Action, Adventure, Fantasy',
  director: 'George Lucas',
  writer: 'George Lucas',
  actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
  plot: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.',
  languages: 'English',
  country: 'USA',
  awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  ratings:
  [{ Source: 'Internet Movie Database', Value: '8.7/10' },
     { Source: 'Rotten Tomatoes', Value: '93%' },
  { Source: 'Metacritic', Value: '92/100' }],
  metascore: '92',
  rating: '8.7',
  votes: '963,318',
  imdbid: 'tt0076759',
  type: 'movie',
  dvd: '21 Sep 2004',
  boxoffice: 'N/A',
  production: '20th Century Fox',
  website: 'http://www.starwars.com/episode-iv/',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0076759'
};

const movieDataConverted = {
  title: 'Star Wars: Episode IV - A New Hope',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  rating: '8.7',
  year: 1977,
  imdburl: 'https://www.imdb.com/title/tt0076759',
  genres: ['Action', 'Adventure', 'Fantasy'],
  actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Peter Cushing']
};

const splitString = str => str.split( ',' ).map( item => item.trim());

export default {
  movieData,
  showData,
  sampleMovie,
  movieDataConverted,
  splitString
};
