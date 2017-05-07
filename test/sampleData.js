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

const sampleTvshow = {
  title: 'My Wife and Kids',
  _year_data: '2001–2005',
  rated: 'TV-PG',
  released: '2001-03-27',
  runtime: '30 min',
  genres: 'Comedy, Romance',
  director: 'N/A',
  writer: 'Don Reo, Damon Wayans',
  actors: 'Damon Wayans, Tisha Campbell-Martin, George Gore II, Parker McKenna Posey',
  plot: 'Damon Wayans plays Michael Kyle, a man on a tragically funny quest for a "traditional" family. He\'s a not-so-modern man living in a very modern world. Can you relate? His stay-at-home bride (Tisha Campbell-Martin) became a stock market trailblazer. His only son idolizes gangster rap stars instead of him. His moody, adolescent daughter\'s two favorite hobbies are asking him for money and giving him grief. And his youngest daughter rarely lets her daddy have the last word. Perhaps after all of the chaos is over, he will realize that his dream of having a normal American family came true a long time ago.',
  languages: 'English',
  country: 'USA',
  awards: '10 wins & 36 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0OTI3ODUzNl5BMl5BanBnXkFtZTcwOTUwMDUyMw@@._V1_SX300.jpg',
  metascore: 'N/A',
  rating: '6.8',
  votes: '21,795',
  imdbid: 'tt0273855',
  type: 'series',
  totalseasons: 5,
  response: 'True',
  series: true,
  imdburl: 'https://www.imdb.com/title/tt0273855',
  _episodes: [],
  start_year: 2001,
  end_year: null
};

const tvShowDataConverted = { title: 'My Wife and Kids',
  genres: ['Comedy', 'Romance'],
  actors: ['Damon Wayans', 'Tisha Campbell-Martin', 'George Gore II', 'Parker McKenna Posey'],
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0OTI3ODUzNl5BMl5BanBnXkFtZTcwOTUwMDUyMw@@._V1_SX300.jpg',
  rating: '6.8',
  imdburl: 'https://www.imdb.com/title/tt0273855',
  seasons: 5
};

const newMovie = {
  title: 'Trainspotting',
  _year_data: '1996',
  year: 1996,
  rated: 'R',
  released: '1996-08-08',
  runtime: '94 min',
  genres: 'Drama',
  director: 'Danny Boyle',
  writer: 'John Hodge (screenplay), Irvine Welsh (novel)',
  actors: 'Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Kevin McKidd',
  plot: 'A wild, freeform, Rabelaisian trip through the darkest recesses of Edinburgh low-life, focusing on Mark Renton and his attempt to give up his heroin habit, and how the latter affects his relationship with family and friends: Sean Connery wannabe Sick Boy, dimbulb Spud, psycho Begbie, 14-year-old girlfriend Diane, and clean-cut athlete Tommy, who\'s never touched drugs but can\'t help being curious about them...',
  languages: 'English',
  country: 'UK',
  awards: 'Nominated for 1 Oscar. Another 20 wins & 26 nominations.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  ratings: [{ Source: 'Internet Movie Database', Value: '8.2/10' },
     { Source: 'Rotten Tomatoes', Value: '90%' },
     { Source: 'Metacritic', Value: '83/100' }],
  metascore: '83',
  rating: '8.2',
  votes: '508,382',
  imdbid: 'tt0117951',
  type: 'movie',
  dvd: '24 Mar 1998',
  boxoffice: 'N/A',
  production: 'Miramax Films',
  website: 'http://www.miramax.com/movie/trainspotting/',
  response: 'True',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0117951' };

const splitString = str => str.split( ',' ).map( item => item.trim());

export default {
  movieData,
  showData,
  sampleMovie,
  movieDataConverted,
  splitString,
  sampleTvshow,
  tvShowDataConverted,
  newMovie
};
