// Dummy data
const getIdForName = require( 'name-to-imdb' );
const imdbApi = require( 'imdb' );

const sampleMovie = {
	title: 'Rambo',
	year: '2008',
	contentRating: '18',
	runtime: '1h 32min',
	description: 'In Thailand, John Rambo joins a group of missionaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.',
	rating: '7.1',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	genre: [ 'Action', ' Thriller', ' War' ],
	director: 'Sylvester Stallone',
	metascore: 'N/A',
	writer: 'Art Monterastelli',
	imdburl: 'https://www.imdb.com/title/tt0462499' };

const imdbMovie = {
	title: 'Rambo',
	description: 'In Thailand, John Rambo joins a group of missionaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	rating: '7.1',
	imdburl: 'https://www.imdb.com/title/tt0462499',
	genre: ['Action', 'Thriller', 'War'],
	type: 'movie'
};

const sampleTvshow = {
	title: 'Castle',
	year: 'N/A',
	contentRating: '15',
	runtime: '43min',
	description: 'After a serial killer imitates the plots of his novels, successful mystery novelist Richard "Rick" Castle receives permission from the Mayor of New York City to tag along with an NYPD homicide investigation team for research purposes.',
	rating: '8.2',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2NjU0ODU0NF5BMl5BanBnXkFtZTgwMDAwMzg5NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	genre: [ 'Comedy', ' Crime', ' Drama' ],
	director: 'Andrew W. Marlowe',
	metascore: 'N/A',
	writer: 'Nathan Fillion'};

const imdbSerie = {
	title: 'Castle',
	description: 'After a serial killer imitates the plots of his novels, successful mystery novelist Richard "Rick" Castle receives permission from the Mayor of New York City to tag along with an NYPD homicide investigation team for research purposes.',
	rating: '8.2',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2NjU0ODU0NF5BMl5BanBnXkFtZTgwMDAwMzg5NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	genre: [ 'Comedy', 'Crime', 'Drama' ],
	imdburl: 'https://www.imdb.com/title/tt1219024',
	type: 'series' };

const getImdbId = query => new Promise(( resolve, reject ) => {
	getIdForName( query, ( err, data ) => {
		if ( err ) reject( err );
		resolve( data );
	});
});

const getImdbData = imdbId => new Promise(( resolve, reject ) => {
	imdbApi( imdbId, ( err, data ) => {
		if ( err ) reject( err );
		resolve( data );
	});
});

export default {
	sampleMovie,
	imdbMovie,
	sampleTvshow,
	imdbSerie,
	getImdbId,
	getImdbData
};
