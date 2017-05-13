// Generic getter for movies and tvshows
import { BaseModel } from '../models/BaseSchema';

const getNameModel = ( modelType ) => {
	let str = '';

	if ( modelType === 'tvshow' ) {
		for ( let i = 0; i <= 2; i += 1 ) {
			str += modelType.charAt( i ).toUpperCase();
		}
		str += modelType.substring( 3 );
	} else {
		str = modelType.charAt( 0 ).toUpperCase() + modelType.substring( 1 );
	}
	return str;
};

const getAPI = ( req, res ) => {
	const model = getNameModel( req.params.imdb );

	const promiseFind = BaseModel.find({ __t: model }).exec();
	promiseFind.then(( response ) => {
		res.type( 'json' );
		res.json({ response });
	});
};

export {
	getAPI
};
