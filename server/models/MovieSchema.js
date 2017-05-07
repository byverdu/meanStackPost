import { BaseSchema, BaseModel } from './BaseSchema';

const MovieSchema = new BaseSchema();
const Movie = BaseModel.discriminator( 'Movie', MovieSchema );

export default Movie;
