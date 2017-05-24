// Dummy data

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

const movieDataConverted = {
	title: 'Rambo',
	description: 'In Thailand, John Rambo joins a group of missionaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	rating: '7.1',
	imdburl: 'https://www.imdb.com/title/tt0462499',
	genre: ['Action', 'Thriller', 'War']
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
	writer: 'Nathan Fillion',
	imdburl: 'https://www.imdb.com/title/tt1219024' };

const tvShowDataConverted = {
	title: 'Castle',
	description: 'After a serial killer imitates the plots of his novels, successful mystery novelist Richard "Rick" Castle receives permission from the Mayor of New York City to tag along with an NYPD homicide investigation team for research purposes.',
	rating: '8.2',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2NjU0ODU0NF5BMl5BanBnXkFtZTgwMDAwMzg5NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	genre: [ 'Comedy', 'Crime', 'Drama' ],
	imdburl: 'https://www.imdb.com/title/tt1219024' };

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
	sampleMovie,
	movieDataConverted,
	splitString,
	sampleTvshow,
	tvShowDataConverted,
	newMovie
};
