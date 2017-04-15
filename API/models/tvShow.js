import mongoose from 'mongoose';
import MovieSchema from './movies';

const Schema = mongoose.Schema;

const ShowSchema = new Schema( Object.assign( MovieSchema.obj, { seasons: Number }));

module.exports = ShowSchema;
