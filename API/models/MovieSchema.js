import { BaseSchema, BaseModel } from './BaseSchema';

const MovieSchema = new BaseSchema();
const Movie = BaseModel.discriminator( 'Movie', MovieSchema );

MovieSchema.methods.getTitle = function () { console.log( this.title ); };

export default Movie;
