import BaseSchema from './BaseSchema';

const MovieSchema = new BaseSchema();

MovieSchema.methods.getTitle = function () { console.log( this.title ); };

export default MovieSchema;
